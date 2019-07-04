const initState = {
  loginErrors: null,
  registerErrors: null,
  authErrors: null,
};
export default function(state = initState, { type, payload }) {
  switch (type) {
    case 'REGISTER_FAILED': {
      return {
        ...state,
        registerErrors: payload.errors,
      };
    }
    case 'LOGIN_FAILED': {
      return {
        ...state,
        loginErrors: payload.errors,
      };
    }
    case 'AUTH_ERROR': {
      return {
        ...state,
        authErrors: payload.errors,
      };
    }
    case 'USER_LOADED':
    case 'REGISTER_SUCCESS':
    case 'LOGIN_SUCCESS': {
      return {
        loginErrors: null,
        registerErrors: null,
        authErrors: null,
      };
    }

    default:
      return state;
  }
}
