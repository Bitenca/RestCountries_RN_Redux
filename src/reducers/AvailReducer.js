import { AVAIL_UPDATE, USER_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    rating: 'n estrelas',
    email: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AVAIL_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case USER_FETCH_SUCCESS:
            return { ...state, email: action.payload };
        default: 
            return state;
    }
};
