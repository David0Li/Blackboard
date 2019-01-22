import React, { Component } from 'react';
import Post from './Post.js';
import RepliesBlock from './RepliesBlock.js';
import Saved from './Saved.js';
import io from 'socket.io-client';
import { Card, Icon } from 'semantic-ui-react';

const margins = {
    marginTop:'2em',
    marginBottom:'2em',
}

class PostCard extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render() {
        return (
            <Card fluid style={margins}>
                <Card.Content>
                    <Card.Description>
                        <Saved></Saved>
                        <Post data={this.props.post}/>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <RepliesBlock
                    userInfo={this.props.userInfo}
                    data={this.props.replies}
                    postId={this.props.post._id}
                    addReply={this.props.addReply}
                    />
                </Card.Content>
            </Card>
            
        );
    }

}

export default PostCard;