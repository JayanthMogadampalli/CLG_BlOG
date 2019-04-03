import React from 'react';
import {Segment} from 'semantic-ui-react';
import {Button} from 'semantic-ui-react';
import {Form} from 'semantic-ui-react';

const NewPost = () => {
   <Segment>
    <Form>
    <Form.Field>
    <label>Title</label>
    <input type="text"  placeholder="Title"></input>
    </Form.Field>
    <Form.Field>
    <label>Image</label>
	<input type="text"  placeholder="Image"></input>
    </Form.Field>
    <Form.Field>
    <label>Blog Content</label>
    <textarea name="blog[body]"></textarea>
    </Form.Field>
    <Form.Field>  
    <Button basic color='violet'>Submit</Button>
    </Form.Field>
    </Form>
    </Segment>
}

export default NewPost;