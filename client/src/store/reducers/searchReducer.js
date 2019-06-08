const initState = {
  searchResults: [],
  searchError: null,
};
const searchReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case 'SEARCH_SUCCESS': {
      console.log(payload);
      return {
        ...state,
        searchResults: payload,
      };
    }
    case 'SEARCH_FAILED':
      return {
        ...state,
        searchError: payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
