import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import './Login/Login.css';

class Login extends Component {
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
        this.setState({ username: e.target.value });
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Field required>
                        <label>Username</label>
                        <input placeholder='username' onChange={this.handleUsernameChange}/>
                    </Form.Field>
                    <Form.Field required>
                        <label>Password</label>
                        <input placeholder='password' type='password' onChange={this.handlePasswordChange}/>
                    </Form.Field>
                    <Button type='submit' onClick={this.login}>Log In</Button>
                </Form>
            </div>
        );
    }
}

export default Login;