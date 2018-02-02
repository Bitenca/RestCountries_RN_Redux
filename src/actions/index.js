import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_START,
    FETCH_ALL_POSTS,
    FETCH_POST,
    REQUEST_START,
 } from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
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
    return (dispatch) => {
        dispatch({ type: REQUEST_START });
        axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
        .then((response) => dispatch({
                type: FETCH_POST,
                payload: response
        }))
        .catch((error) => console.log(error));
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER_START });
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch((error) => { loginUserFail(dispatch); console.log(error); });
    };
};

export const registerUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER_START });
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch((error) => { loginUserFail(dispatch); console.log(error); });
    };
};

export const userNavigate = () => {
    Actions.userCountries();
};

const requestSuccess = (dispatch, response) => {
    dispatch({
        type: FETCH_ALL_POSTS,
        payload: response
    });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};

const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL,
    });
};
