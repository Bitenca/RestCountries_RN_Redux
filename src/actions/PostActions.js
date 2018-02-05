import axios from 'axios';
import { 
    FETCH_ALL_POSTS,
    FETCH_POST,
    REQUEST_START,
    SEARCH_START,
    RESET_SEARCH 
 } from './types';

export const searchStart = (text) => {
    return {
        type: SEARCH_START,
        payload: text
    };
};

export const resetSearch = () => {
    return {
        type: RESET_SEARCH
    };
};

export const fetchAllPosts = () => {
    return (dispatch) => {
        dispatch({ type: REQUEST_START });
        axios.get('https://restcountries.eu/rest/v2/name/united')
        .then((response) => requestSuccess(dispatch, response))
        .catch((error) => console.log(error));
    };
};

export const fetchPost = (name) => {
    const request = `https://restcountries.eu/rest/v2/name/${name}`;
    return (dispatch) => {
        dispatch({ type: REQUEST_START });
        axios.get(request)
        .then((response) => dispatch({
                type: FETCH_POST,
                payload: response
        }))
        .catch((error) => console.log(error));
    };
};

const requestSuccess = (dispatch, response) => {
    dispatch({
        type: FETCH_ALL_POSTS,
        payload: response
    });
};
