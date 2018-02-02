export function fetchHasErroredKudos(state = false, action) {
  switch (action.type) {
    case 'FETCH_HAS_ERRORED_KUDOS':
      return action.hasErrored;

    default:
      return state;
  }
}

export function fetchIsLoadingKudos(state = false, action) {
  switch (action.type) {
    case 'FETCH_IS_LOADING_KUDOS':
      return action.isLoading;

    default:
      return state;
  }
}

export function fetchDataKudos(state = {}, action) {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS_KUDOS':
      return action.dataSource;

    default:
      return state;
  }
}