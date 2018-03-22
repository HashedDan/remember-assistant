import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Home/Home.css';
import Dashboard from './Dashboard';
import Login from './Login';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Re-Member Assistant!</h1>
        <h3>Please login below...</h3>
      <Router>
        <div>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
      </div>
    );
  }
}

export default Home;
