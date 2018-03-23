import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import './Login/Login.css';

class Login extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Field required>
                        <label>Username</label>
                        <input placeholder='username' />
                    </Form.Field>
                    <Form.Field required>
                        <label>Password</label>
                        <input placeholder='password' type='password'/>
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default Login;