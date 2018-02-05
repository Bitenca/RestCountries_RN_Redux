import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { AVAIL_UPDATE, AVAIL_FETCH_SUCCESS, USER_FETCH_SUCCESS } from './types';


export const availUpdate = ({ prop, value }) => {
    return {
        type: AVAIL_UPDATE,
        payload: { prop, value }
    };
};

export const availCreate = ({ rate, name, flag }) => {
    const { currentUser } = firebase.auth();
    console.log(rate, name, flag);
    
    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/countries`)
        .push({ rate, name, flag })
        .then(() => Actions.pop());
    };
};

export const availFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/countries`)
        .on('value', snapshot => {
            dispatch({ 
                type: AVAIL_FETCH_SUCCESS, 
                payload: snapshot.val() });
        });
    };
};

export const userFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
            dispatch({ 
                type: USER_FETCH_SUCCESS, 
                payload: currentUser.email });
    };
};

