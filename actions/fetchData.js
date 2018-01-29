import firebase from 'firebase';

export function fetchHasErrored(bool) {
  return {
    type: 'FETCH_HAS_ERRORED',
    hasErrored: bool
  };
}

export function fetchIsLoading(bool) {
  return {
    type: 'FETCH_IS_LOADING',
    isLoading: bool
  };
}

export function fetchSuccess(userId) {
  return {
    type: 'FETCH_DATA_SUCCESS',
    userId
  };
}

export function fetchData(dataName) {
  return (dispatch) => {
    dispatch(fetchIsLoading(true));
    try {
      firebase.database().ref('/' + dataName).once('value').then((data) => {
        dispatch(fetchIsLoading(false));
        const dataSource = data.val();
        dispatch(fetchSuccess(dataSource));
      });
    } catch (error) {
      dispatch(fetchHasErrored(true));
    }
  };
}