// dependencies
const express = require('express');
const connect = require('connect-ensure-login');

// models
const User = require('../models/user');
const Post = require('../models/post');
const Reply = require('../models/reply');

const router = express.Router();

// api endpoints
router.get('/test', function(req, res) {
    res.send('quack');
});

router.get('/whoami', function(req, res) {
    if(req.isAuthenticated()) {
        res.send(req.user);
    }
    else {
        res.send({});
    }
});


router.get('/user', function(req, res) {
    User.findOne({ _id: req.query._id }, function(err, user) {
        res.send(user);
    });
});

router.get('/posts', function(req, res) {
    Post.find({}, function(err, posts) {
        res.send(posts);
    });
});

router.post(
    '/post',
    connect.ensureLoggedIn(),
    function(req, res) {
        const newPost = new Post({
            'creator_id': req.user._id,
            'creator_name': req.user.name,
            'content': req.body.content,
        });
  
        newPost.save(function(err, post) {
            User.findOne({ _id: req.user._id },function(err, user) {
                user.last_post = req.body.content;
                user.save(); // this is OK, because the following lines of code are not reliant on the state of user, so we don't have to shove them in a callback. 
                // configure socketio
                const io = req.app.get('socketio');
                io.emit("post", { creator_id: post.id, creator_name: user.name, content: req.body.content });
            });
            if (err) console.log(err);
        });
        res.send({});
  }
);

router.get('/reply', function(req, res) {
    Reply.find({ parent: req.query.parent }, function(err, replys) {
        res.send(replys);
    })
});

router.post(
    '/reply',
    connect.ensureLoggedIn(),
    function(req, res) {
        const newReply = new Reply({
            'creator_id': req.user._id,
            'creator_name': req.user.name,
            'parent': req.body.parent,
            'content': req.body.content,
        });

        newReply.save(function(err, reply) {
            // configure socket
            const io = req.app.get('socketio');
            io.emit("reply", { creator_name: req.user.name, parent: req.body.parent, content:req.body.content});
            if (err) console.log(err);
        });
        res.send({});
  }
);
module.exports = router;
