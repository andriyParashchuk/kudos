import firebase from 'firebase';

export function authHasErrored(bool) {
  return {
    type: 'AUTH_HAS_ERRORED',
    hasErrored: bool
  };
}

export function authIsLoading(bool) {
  return {
    type: 'AUTH_IS_LOADING',
    isLoading: bool
  };
}

export function authSuccess(userId) {
  return {
    type: 'AUTH_SUCCESS',
    userId
  };
}

export function auth() {
  return (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(authIsLoading(false));
        dispatch(authSuccess(user.uid));
      } else {
        dispatch(authHasErrored(true));
      }
    });
  };
}