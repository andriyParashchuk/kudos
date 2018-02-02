import {combineReducers} from 'redux';
import routes from './routes';
import {authUserId, authHasErrored, authIsLoading} from './auth';
import {fetchData, fetchHasErrored, fetchIsLoading} from './fetchData';
import {fetchDataKudos, fetchHasErroredKudos, fetchIsLoadingKudos} from './fetchDataKudos';

export default combineReducers({
  routes,
  authUserId,
  authHasErrored,
  authIsLoading,
  fetchData,
  fetchHasErrored,
  fetchIsLoading,
  fetchDataKudos,
  fetchHasErroredKudos,
  fetchIsLoadingKudos
});