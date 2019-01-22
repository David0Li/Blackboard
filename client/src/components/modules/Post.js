import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Post extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to={"/profile/" + this.props.data.creator_id} className="comment-creator">
                    {this.props.data.creator_name}
                </Link>
                <p>
                    {this.props.data.content}
                </p>
            </div>
        );
    }
}

export default Post;