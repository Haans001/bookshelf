const initState = {
  errors: null,
};

export default function(state = initState, { type, payload }) {
  switch (type) {
    case 'COMMENT_SUBMIT_SUCCESS': {
      return {
        ...state,
        errors: null,
      };
    }
    case 'COMMENT_SUBMIT_FAILED': {
      return {
        ...state,
        errors: payload.errors,
      };
    }

    default:
      return state;
  }
}
