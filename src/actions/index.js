import axios from 'axios';
import firebase from 'firebase';
import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_START
 } from './types';

const RequestURL = 'https://restcountries.eu/rest/v2/';

export const fetchAllPosts = () => {
    const request = axios.get(`${RequestURL}/all/`);

    return {
        type: 'FETCH_ALL_POSTS',
        payload: request
    };
};

export const fetchPost = (name) => {
    const request = axios.get(`${RequestURL}/name/${name}`);

    return {
        type: 'FETCH_POST',
        payload: request
    };
};

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

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
};

const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL,
    });
};
