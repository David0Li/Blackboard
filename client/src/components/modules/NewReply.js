import React, { Component } from 'react';
import {
    Input,
    Form,
    Button
} from 'semantic-ui-react';

class NewReply extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value 
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addReply(this.props.postId, this.state.value);
        this.setState({
            value: '' 
        });
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input 
                    fluid size='mini' 
                    type="text" 
                    placeholder="New Reply" 
                    value={this.state.value} 
                    onChange={this.handleChange}
                    action = 'Submit' 
                    placeholder = 'Write a reply...'>
                    </Input>
                </Form>
                {/* <Button floated='right' size='mini' onClick={this.handleSubmit}>Submit</Button> */}
            </div>
        );
    }
}

export default NewReply;