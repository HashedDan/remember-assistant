import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import './Home/Home.css';
import Dashboard from './Dashboard';
import Login from './Login';
import Nav from './Nav';

class Home extends Component {
  constructor(props) {
    super(props);
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
          <Router>
            <div>
              <Route path="/login" render={() => (
                this.state.user ? (<Dashboard />) : (
                  <Login />
                )
              )} />
              <Route exact path="/" render={() => (
                this.state.user ? (<Dashboard />) : (
                  // <Redirect to={{
                  //   pathname: "/login"
                  // }} />
                  <Login />
                )
              )} />
            </div>
          </Router>
        </Container>

      </div>
    );
  }
}

export default Home;
