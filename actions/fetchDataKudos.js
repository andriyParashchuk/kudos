import firebase from 'firebase';

export function fetchHasErroredKudos(bool) {
  return {
    type: 'FETCH_HAS_ERRORED_KUDOS',
    hasErrored: bool
  };
}

export function fetchIsLoadingKudos(bool) {
  return {
    type: 'FETCH_IS_LOADING_KUDOS',
    isLoading: bool
  };
}

export function fetchSuccessKudos(dataSource) {
  return {
    type: 'FETCH_DATA_SUCCESS_KUDOS',
    dataSource
  };
}

export function fetchDataKudos(dataName) {
  return (dispatch) => {
    dispatch(fetchIsLoadingKudos(true));
    try {
      firebase.database().ref('/' + dataName).once('value').then((data) => {
        dispatch(fetchIsLoadingKudos(false));
        const dataSource = data.val();
        dispatch(fetchSuccessKudos(dataSource));
      });
    } catch (error) {
      dispatch(fetchHasErroredKudos(true));
    }
  };
}