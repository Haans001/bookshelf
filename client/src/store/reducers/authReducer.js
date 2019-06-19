const initState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  user: null,
  error: null,
};

export default function(state = initState, { type, payload }) {
  switch (type) {
    case 'REGISTER_SUCCESS': {
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        isAuthenticated: true,
        user: payload.user,
      };
    }
    case 'REGISTER_FAILED': {
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        error: payload.msg,
      };
    }
    default:
      return state;
  }
}
