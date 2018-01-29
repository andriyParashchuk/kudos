export function fetchHasErrored(state = false, action) {
  switch (action.type) {
    case 'FETCH_HAS_ERRORED':
      return action.hasErrored;

    default:
      return state;
  }
}

export function fetchIsLoading(state = false, action) {
  switch (action.type) {
    case 'FETCH_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}

export function fetchData(state = {}, action) {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return action.dataSource;

    default:
      return state;
  }
}