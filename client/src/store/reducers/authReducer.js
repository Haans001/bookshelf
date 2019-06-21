const initState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
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
        errors: null,
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
        isLoading: false,
        user: null,
        errors: payload.errors,
      };
    }
    case 'USER_LOADING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'USER_LOADED': {
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: payload.user,
        errors: null,
      };
    }

    default:
      return state;
  }
}
