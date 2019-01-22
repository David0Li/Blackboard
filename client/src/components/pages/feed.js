import React, { Component } from 'react';
import PostCard from '../modules/PostCard.js';
import NewPost from '../modules/NewPost.js';
import Classes from '../modules/Classes.js';
import Toggle from '../modules/Toggle.js';
import io from 'socket.io-client';
import {
    Grid,
    Rail,
    Sticky,
} from 'semantic-ui-react'
//import 'semantic-ui-css/semantic.min.css';

const menuStyle = {
    marginTop: '2em',
  }

  

class Feed extends Component {
	constructor(props) {
        super(props);

        this.socket = io('http://localhost:3000');

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        this.socket.on('post', (post) => {
            this.setState({
                posts: [{post: post, replies: []}].concat(this.state.posts),
            });
        });

        document.title = "News Feed";
        this.getPosts();

        this.socket.on('reply', (reply) => {
            let newState = Object.assign({}, this.state);
            let replyParent = newState.posts.find(x => x.post._id === reply.parent);
            replyParent.replies.push(reply);
            this.setState({newState});
        });
    }

    render() {
        const isLoggedIn = this.props.userInfo !== null;
        return (
            <Grid stackable container style={menuStyle} >
                    <Grid.Column width={3} >
                    <Sticky offset={70}>
                    {/* <Rail position='right'> */}
                        <Toggle></Toggle>
                        <Classes></Classes>
                    {/* </Rail> */}
                    </Sticky>
                    </Grid.Column>
                    <Grid.Column width={11} style={menuStyle}>
                        {isLoggedIn ? (
                            <div>
                            
                            <NewPost 
                                addPost={this.addPost} userInfo={this.props.userInfo}
                            />
                            </div>
                        ) : (
                            <div>
                                You must be logged in to post and reply.
                            </div>
                        )}
                        {this.state.posts ? (
                            this.state.posts.map(postObj => (
                                <PostCard
                                    key={`PostCard_${postObj.post._id}`}
                                    post={postObj.post}
                                    userInfo={this.props.userInfo}
                                    replies = {postObj.replies}
                                    addReply = {this.addReply}
                                />
                                )
                            )
                        ) : (
                            <div>
                                No posts!
                            </div>
                            )
                        }
                    </Grid.Column>
                
            </Grid>

        );
    }  

    getPosts = () => {
        fetch('/api/posts')
        .then(res => res.json())
        .then(
          postObjs => postObjs.reverse().map((postObj) => {
            this.getReplies(postObj._id).then(
              replies => {
                this.setState({
                  posts: (this.state.posts).concat([{post: postObj, replies: replies}])
                })
              }
            );
          })
        );
    };


    getReplies = (postId) => {
      return fetch(`/api/reply?parent=${postId}`)
        .then(res => res.json())
    };

    addPost = (content) => {
        const body = { 'content': content };
        fetch('/api/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };


    addReply = (parent, content) => {
        const body = {'parent': parent, 'content': content };
        fetch('/api/reply', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
        });
    };
}

export default Feed;