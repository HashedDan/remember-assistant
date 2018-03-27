import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, browserHistory } from 'react-router-dom';
import { Container, Dropdown, Menu } from 'semantic-ui-react'
import './Home/Home.css';
import Dashboard from './Dashboard';
import Login from './Login';

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
              <Menu.Item>
                <h4>{this.state.user}</h4>
              </Menu.Item>
              <Menu.Item name={this.state.user ? 'Logout' : 'Log In'} />
            </Menu.Menu>
          </Container>
        </Menu>
        <Container text style={{ marginTop: '7em' }}>
          <Router history={browserHistory}>
            <div>
              <Route path="/login" render={() => (
                this.state.user ? (<Dashboard />) : (
                  <Login changeUser={this.changeUser.bind(this)} />
                )
              )} />
              <Route exact path="/" render={() => (
                this.state.user ? (<Dashboard />) : (
                  <Redirect to={{
                    pathname: "/login"
                  }} />
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
