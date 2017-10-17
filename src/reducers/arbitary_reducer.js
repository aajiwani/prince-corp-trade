export default function reducer(state = {
  user: {},
  fetching: false,
  fetched: false,
  error: null
}, action) {
  switch (action.type)
  {
    case "FETCH_USER_CONTEXT_PENDING": {
      return {...state, fetching: true};
    }
    case "FETCH_USER_CONTEXT_REJECTED": {
      return {...state, fetching: false, error: action.payload};
    }
    case "FETCH_USER_CONTEXT_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload
      }
    }
  }

  return state;
}
