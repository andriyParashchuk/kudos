export function authHasErrored(state = false, action) {
  switch (action.type) {
    case 'AUTH_HAS_ERRORED':
      return action.hasErrored;

    default:
      return state;
  }
}

export function authIsLoading(state = false, action) {
  switch (action.type) {
    case 'AUTH_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}

export function authUserId(state = '', action) {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return action.userId;

    default:
      return state;
  }
}