import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {Icon} from 'semantic-ui-react'; 
import { Menu } from 'semantic-ui-react';
import Logout from './containers/Auth/Logout/Logout';
import NewPost from './containers/NewPost/NewPost';
import Auth from './containers/Auth/Auth';
import Posts from './containers/Posts/Posts';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import * as actions from './store/actions/index';

class App extends Component {
  
  state={}

  componentDidMount () {
    this.props.onTryAutoSignup();
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

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
      <Menu inverted>
      <Menu.Item name='CLG_BLOG' active={activeItem === 'home'} onClick={this.handleItemClick} as={Link} to='/' > <Icon name='comment' />CLG_BLOG</Menu.Item>
      <Menu.Item
        name='HOME'
        as={Link} to='/'
        active={activeItem === 'messages'}
        onClick={this.handleItemClick}
      />
      <Menu.Item
        name='NewPost'
        as={Link} to='/newpost'
        active={activeItem === 'friends'}
        onClick={this.handleItemClick}
      />
      {!this.props.Authenticated?<Menu item  as={ Link } name='Login' to='/login'/>:""}
      {this.props.Authenticated?<Menu item  as={Link} name='Profile' to='/profile'/>:""}
      {this.state.Authenticated?<Menu item as={Link} name='Logout' to='/logout' />:""}
    </Menu>
      
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

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );

