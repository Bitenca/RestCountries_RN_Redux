import { 
    FETCH_POST,
    FETCH_ALL_POSTS
} from '../actions/types';

const INITIAL_STATE = {
    all: [],
    selected: null
};

export default (state = {}, action) => {
    console.log(action);
    switch (action.type) {
        case FETCH_ALL_POSTS:
            return { ...state, all: action.payload };
        case FETCH_POST:
            return { ...state, selected: action.payload };
        default:
            return state;
    }
};
