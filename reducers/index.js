import {combineReducers} from 'redux';
import {authUserId, authHasErrored, authIsLoading} from './auth';
import {fetchData, fetchHasErrored, fetchIsLoading} from './fetchData';

export default combineReducers({
    authUserId,
    authHasErrored,
    authIsLoading,
    fetchData,
    fetchHasErrored,
    fetchIsLoading
});