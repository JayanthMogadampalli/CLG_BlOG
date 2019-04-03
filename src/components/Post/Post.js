import React from 'react';
import { Container } from 'semantic-ui-react';
import { Image, Item } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { Segment } from 'semantic-ui-react';
import classes from './Post.css';

const Post = (props) => {
  return(
    <div className={classes.Post}>
    <Container>
    <Segment top attached>
    <Item>
    <Item.Image size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' centered rounded/>
    <Item.Header as='a'>{props.title}</Item.Header>
    <Item.Content>
       <Item.Meta>{props.toDate}</Item.Meta>
    </Item.Content>
    <Item.Description>
      {props.description}
  </Item.Description>
    <Button basic color='orange' onClick={props.edit}>Edit</Button>
    <Button basic color='red' onclick={props.delete}>Delete</Button>
     </Item>
  </Segment>
   
</Container>
</div>    
  );
}

export default Post;