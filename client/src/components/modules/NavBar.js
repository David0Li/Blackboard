import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
    Header,
    Menu,
    Container,
    Input,
    Visibility,
    Responsive,
    Icon
 } from 'semantic-ui-react'

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
            <div>
          {/* Heads up, style below isn't necessary for correct work of example, simply our docs defines otherbackground color.
            */}
          <style>{`
            html, body {
              background: #f2f2f2;
            }
          `}</style>
            <Menu fixed = 'top' inverted
              borderless
            >
            <Container>
                <Menu.Item header as = 'a'>Blackboard</Menu.Item>
                <Menu.Item position='right'> 
                    <Input className='icon' icon='search' placeholder='Search...' />
                </Menu.Item> 
                <Menu.Item> 
                    {this.props.userInfo == null ? (
                       <a></a>
                   ) : (
                        <React.Fragment>
                            <Link to={"/profile" + this.props.userInfo._id}>Profile</Link>
                        </React.Fragment>
                   )}
                </Menu.Item> 
                <Menu.Item>
                    { this.props.userInfo === null ? (
                      <a href="/auth/google">Login</a>
                    ) : (
                      <React.Fragment>
                          <a href="/logout">Logout</a>
                      </React.Fragment>
                    )}
                </Menu.Item>     
            </Container>
            </Menu>
        </div>
        );
    }
}

export default NavBar;  