import React, {Component } from 'react';
import classes from './Profile.css';
import { Card, Icon, Image, Container,Segment } from 'semantic-ui-react';
import {Button} from 'semantic-ui-react';

class Profile extends Component {
   
    render() {
        return (
      <Container>
      <div className={classes.spac}>
      <Card>
      <Image src='/images/avatar/large/matthew.png'  size='medium' circular/>
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
        <Button color="violet" onClick={this.props.increaseFollowers}>Follow</Button>
      </Card.Content>
      <Card.Content extra>
        <span className={classes.cfont}>Followers</span>
        <span className={ classes.cfont}>Articles</span>
        <span className={classes.cfont}>Following</span>
      </Card.Content>
    </Card>
      </div>
      <div>
         <Segment className={classes.bspac}>
           <h1 className={classes.bdark}>Hello,I am JONATHON DOE</h1>
           <h4>Web Designer and Web Developer</h4>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
         </Segment>
         <Segment>
         <h2>Personal Profile</h2>
         <hr/>
         <p>Name:Jonathon Doe</p>
         <p>Date of Birth:December 08,2018</p>
         <p>Address:222St,Newman way</p>
         <p>Phone:9182933233</p>
       </Segment>
      </div>
      </Container>
        
           
        );
    }
}

export default Profile;