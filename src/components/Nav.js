import React, { Component } from 'react';
import { Container, Dropdown, Menu, Button } from 'semantic-ui-react';
import './Nav/Nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    login = () => {
        this.props.changeUser(this.state.username);
    }

    handleUsernameChange = (e) => {
        console.log(e.target.value);
        this.setState({ username: e.target.value });
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    }

    render() {
        return (
            <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item as='a' header>
                        {/* <Image
              size='mini'
              src='./feather.png'
              style={{ marginRight: '1.5em' }}
            /> */}
                        Re-Member AB
      </Menu.Item>
                    <Menu.Item as='a'>Home</Menu.Item>

                    <Dropdown item simple text='Dropdown'>
                        <Dropdown.Menu>
                            <Dropdown.Item>List Item</Dropdown.Item>
                            <Dropdown.Item>List Item</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Header>Header Item</Dropdown.Header>
                            <Dropdown.Item>
                                <i className='dropdown icon' />
                                <span className='text'>Submenu</span>
                                <Dropdown.Menu>
                                    <Dropdown.Item>List Item</Dropdown.Item>
                                    <Dropdown.Item>List Item</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown.Item>
                            <Dropdown.Item>List Item</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Menu position='right'>
                        {this.props.user ?
                            <Menu.Item><h4>{this.props.user}</h4></Menu.Item>
                            :
                            <Menu.Item>
                                <input placeholder='username' onChange={this.handleUsernameChange} />
                                <input placeholder='password' onChange={this.handlePasswordChange} />
                                <Button type='submit' onClick={this.login}>Log In</Button>
                            </Menu.Item>
                        }
                    </Menu.Menu>
                </Container>
            </Menu>
        );
    }
}

export default Nav;