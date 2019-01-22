import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/app.css'

class Reply extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="reply">
                <Link to={"/profile/" + this.props.data.creator_id} className="comment-creator">
                    {this.props.data.creator_name}
                </Link>
                <span className="comment-content">
                    {' | ' + this.props.data.content}
                </span>
            </div>
        );
    }
}

export default Reply;