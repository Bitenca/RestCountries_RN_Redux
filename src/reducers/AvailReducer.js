import { AVAIL_UPDATE } from '../actions/types';

const INITIAL_STATE = {
    nameSelected: '',
    rating: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AVAIL_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        default: 
            return state;
    }
};
