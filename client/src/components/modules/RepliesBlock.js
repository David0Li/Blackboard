import React, { Component } from 'react';
import Reply from './Reply.js';
import NewReply from './NewReply.js';

class RepliesBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const isLoggedIn = this.props.userInfo !== null;
        return (
            <div>
                <div>
                    {this.props.data.map(reply => (
                        <Reply
                            key={`Reply_${reply._id}`}
                            data={reply}
                        />
                    ))}
                    { isLoggedIn ? (
                        <NewReply 
                            postId={this.props.postId}
                            addReply={this.props.addReply}
                        />
                    ) : (
                        <div>
                            {/* You must be logged in to reply. */}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default RepliesBlock;