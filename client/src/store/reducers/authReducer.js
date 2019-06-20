const initState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  user: null,
  errors: null,
};

export default function(state = initState, { type, payload }) {
  switch (type) {
    case 'REGISTER_SUCCESS':
    case 'LOGIN_SUCCESS': {
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        isAuthenticated: true,
        user: payload.user,
        error: null,
      };
    }
    case 'LOGOUT':
    case 'REGISTER_FAILED':
    case 'LOGIN_FAILED':
    case 'AUTH_ERROR': {
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        errors: payload.errors,
      };
    }
    case 'USER_LOADED': {
      return {
        ...state,
        isAuthenticated: true,
        user: payload.user,
        error: null,
      };
    }

    default:
      return state;
  }
}
