import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { AVAIL_UPDATE } from './types';


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
