import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PostReducer from './PostReducer';
import AvailReducer from './AvailReducer';

export default combineReducers({
   auth: AuthReducer,
   posts: PostReducer,
   avail: AvailReducer
});
