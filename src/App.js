import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={Posts} />
        <Redirect to="/" />
      </Switch>
    );

    if ( this.props.isAuthenticated ) {
      routes = (
        <Switch>
          <Route path="/newpost" component={NewPost} />
          <Route path="/profile" component={Profile} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={Posts} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <main>

      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      
        <Nav className="mr-auto">
        <NavItem><Link class="nav-link" to="/">Home</Link></NavItem> 
         <NavItem><Link class="nav-link" to="/newpost">NewPost</Link></NavItem>
          {!this.props.Authenticated?<NavItem> <Link class="nav-link" to='/login'>Login</Link> </NavItem>  : ''}
          {this.props.Authenticated?<NavItem> <Link class="nav-link" to='/logout'>Logout</Link> </NavItem>  : ''}
          { this.state.Authenticated?<NavItem> <Link class="nav-link" to='/profile'>Profile</Link></NavItem> : ''}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      <div className="card main">
       {routes}
      </div>
   </main>
    );
  }
 
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};   

export default App;
