const express = require("express");
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require("path");
require("dotenv").config();

const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

// local dependencies
const db = require('./db');
const passport = require('./passport');
const api = require('./routes/api');

app.set('socketio', io);

const publicPath = path.resolve(__dirname, "..", "client", "dist");

app.use(session({
  secret: 'session-secret',
  resave: 'false',
  saveUninitialized: 'true'
}));

app.use(passport.initialize());
app.use(passport.session());

// set POST request body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// authentication routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

app.get(
  '/auth/google/callback',
  passport.authenticate(
    'google',
    { failureRedirect: '/login' }
  ),
  function(req, res) {
    res.redirect('/');
  }
);

app.get('/logout', function(req, res) {
  //req.session.destroy();
  req.logOut();
  res.redirect('/'); 
});

app.use('/api', api );
app.use(express.static(publicPath));

const port = (process.env.PORT || 5000);
http.listen(port, () => {
  console.log(`Listening on port 3000 and looking in folder ${publicPath}`);
});





