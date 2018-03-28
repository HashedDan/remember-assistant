import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import './Home/Home.css';
import Dashboard from './Dashboard';
import Login from './Login';
import Nav from './Nav';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }
  changeUser = (username) => {
    this.setState({
      user: username
    });
  }

  render() {
    return (
      <div>
        <Nav user={this.state.user} changeUser={this.changeUser.bind(this)} />
        <Container text style={{ marginTop: '7em' }}>
          <div>
            {this.state.user ? (<Dashboard />) : (
              <Login />
            )
            }
          </div>
        </Container>

      </div>
    );
  }
}

export default Home;
