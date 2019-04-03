import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from '../../components/Post/Post';
import * as actions from '../../store/actions/index';
import Spinner from '../../Spinner/Spinner';

class Posts extends Component {
    componentDidMount () {
        this.props.onFetchPosts();
    }

    render () {
        let posts = <Spinner />;
        if ( !this.props.loading ) {
            posts = this.props.posts.map( post => (
                <Post
                    key={post.id}
                    description={post.description}
                    company={post.company}
                    image={post.image}
                     />
            ) )
        }
        return (
            <div>
                {posts}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.post.posts,
        loading: state.post.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts: () => dispatch( actions.fetchPosts() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Posts );