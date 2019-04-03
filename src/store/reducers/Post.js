import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    posts: [],
    loading: false,
    posted: false
};

const postInit = ( state, action ) => {
    return updateObject( state, { purchased: false } );
};

const addPostStart = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const addPostSuccess = ( state, action ) => {
    const newOrder = updateObject( action.postData, { id: action.postId } );
    return updateObject( state, {
        loading: false,
        purchased: true,
        orders: state.posts.concat( newPost )
    } );
};

const addPostFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const fetchPostsStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchPostsSuccess = ( state, action ) => {
    return updateObject( state, {
        orders: action.orders,
        loading: false
    } );
};

const fetchPostsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_INIT: return addInit( state, action );
        case actionTypes.ADD_POST_START: return addPostStart( state, action );
        case actionTypes.ADD_POST_SUCCESS: return addPostSuccess( state, action )
        case actionTypes.PURCHASE_BURGER_FAIL: return addPostFail( state, action );
        case actionTypes.FETCH_ORDERS_START: return fetchPostsStart( state, action );
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchPostsSuccess( state, action );
        case actionTypes.FETCH_ORDERS_FAIL: return fetchPossFail( state, action );
        default: return state;
    }
};

export default reducer;