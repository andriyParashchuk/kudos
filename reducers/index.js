import {combineReducers} from 'redux';
import {authUserId, authHasErrored, authIsLoading} from './auth';

export default combineReducers({
    authUserId,
    authHasErrored,
    authIsLoading
});