import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addPostSuccess = ( post, postData ) => {
    return {
        type: actionTypes.ADD_POST_SUCCESS,
        postId: id,
        postData: postData
    };
};

export const addPostFail = ( error ) => {
    return {
        type: actionTypes._FAIL,
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

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    };
};

export const fetchOrdersSuccess = ( orders ) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFail = ( error ) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    };
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    };
};

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get( '/orders.json' + queryParams)
            .then( res => {
                const fetchedOrders = [];
                for ( let key in res.data ) {
                    fetchedOrders.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fetchOrdersSuccess(fetchedOrders));
            } )
            .catch( err => {
                dispatch(fetchOrdersFail(err));
            } );
    };
};