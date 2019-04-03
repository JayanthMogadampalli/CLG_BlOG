import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addPostSuccess = ( id, postData ) => {
    return {
        type: actionTypes.ADD_POST_SUCCESS,
        postId: id,
        postData: postData
    };
};

export const addPostFail = ( error ) => {
    return {
        type: actionTypes.ADD_POST_FAIL,
        error: error
    };
}

export const addPostStart = () => {
    return {
        type: actionTypes.ADD_POST_START
    };
};

export const addPost = ( postData, token ) => {
    return dispatch => {
        dispatch( addPostStart() );
        axios.post( '/posts.json', postData )
            .then( response => {
                console.log( response.data );
                dispatch( addPostSuccess( response.data.name, postData ) );
            } )
            .catch( error => {
                dispatch( addPostFail( error ) );
            } );
    };
};

export const addInit = () => {
    return {
        type: actionTypes.POST_INIT
    };
};

export const fetchPostsSuccess = ( orders ) => {
    return {
        type: actionTypes.FETCH_POSTS_SUCCESS,
        orders: orders
    };
};

export const fetchPostsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_POSTS_FAIL,
        error: error
    };
};

export const fetchPostsStart = () => {
    return {
        type: actionTypes.FETCH_POSTS_START
    };
};

export const fetchPosts = (token) => {
    return dispatch => {
        dispatch(fetchPostsStart());
        const queryParams = '?auth=' + token;
        axios.get( '/posts.json' + queryParams)
            .then( res => {
                const fetchedPosts = [];
                for ( let key in res.data ) {
                    fetchedPosts.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fetchPostsSuccess(fetchedPosts));
            } )
            .catch( err => {
                dispatch(fetchPostsFail(err));
            } );
    };
};