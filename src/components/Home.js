import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Input } from 'semantic-ui-react'
import './Home/Home.css';
import Dashboard from './Dashboard';
import Login from './Login';

class Home extends Component {
  
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
                <h4>Daniel Mangum</h4>
              </Menu.Item>
              <Menu.Item name='logout' />
            </Menu.Menu>
          </Container>
        </Menu>
        <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>Semantic UI React Fixed Template</Header>
          <p>This is a basic fixed menu template using fixed size containers.</p>
          <p>A text container is used for the main container, which is useful for single column layouts.</p>
          <h1>Welcome to Re-Member Assistant!</h1>
          <h3>Please login below...</h3>
          <Router>
            <div>
              <Route exact path="/" component={Dashboard} />
              <Route path="/login" component={Login} />
            </div>
          </Router>
        </Container>

      </div>
    );
  }
}

export default Home;
