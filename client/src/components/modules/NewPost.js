import React, { Component } from 'react';
import 
{   Item, 
    Button,
    Form,
    TextArea,
    Grid,
    Card
} from 'semantic-ui-react';



class NewPost extends Component {
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
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addPost(this.state.value);
        this.setState({
            value: '' 
        });
    }

    render() {
        return (
            <Card fluid>
                <Card.Content>
                    <Card.Header>Ask a question...</Card.Header>
                    <Form onSubmit={this.handleSubmit}> 
                        <Form.TextArea
                            placeholder={"What's on your mind, " + 
                                        this.props.userInfo.name.substring(0,this.props.userInfo.name.indexOf(' ')) + "?"}
                            value={this.state.value} 
                            onChange={this.handleChange}
                        />
                        <Button type="submit" value="Submit" onClick= {this.handleSubmit} floated='right' >Post</Button>
                    </Form>
                </Card.Content>
            </Card>
        );
    }
}

export default NewPost;