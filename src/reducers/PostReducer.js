import { 
    FETCH_POST,
    FETCH_ALL_POSTS,
    SEARCH_START,
} from '../actions/types';

const INITIAL_STATE = {
    all: [],
    selected: null,
    search: [],
    name: ''
};

export default (state = {}, action) => {
    console.log(action);
    switch (action.type) {
        case FETCH_ALL_POSTS:
            return { ...state, all: action.payload };
        case FETCH_POST:
            return { ...state, selected: action.payload, search: action.payload };
        case SEARCH_START:
            return { ...state, name: action.payload };
        default:
            return state;
    }
};
