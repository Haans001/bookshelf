import axios from 'axios';

export const signUp = ({
  userName,
  email,
  password,
  repeatPassword,
}) => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ userName, email, password, repeatPassword });

  axios
    .post('/auth/signup', body, config)
    .then(resp => {
      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: {
          token: resp.data.token,
          user: resp.data.user,
        },
      });
    })
    .catch(err => {
      dispatch({
        type: 'REGISTER_FAILED',
        payload: {
          msg: err.response.data.msg,
        },
      });
    });
};

export const tokenConfig = getState => {
  // Get token from localstorage
  const {
    auth: { token },
  } = getState();

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  // If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};

export const loadUser = () => (dispatch, getState) => {
  axios
    .get('/auth/user', tokenConfig(getState))
    .then(res => {
      console.log(res);
      dispatch({
        type: 'USER_LOADED',
        payload: {
          user: res.data.user,
        },
      });
    })
    .catch(err => {
      dispatch({
        type: 'AUTH_ERROR',
        payload: { msg: err.response.data.msg },
      });
    });
};

export const signIn = ({ email, password }) => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });
  axios
    .post('/auth/signin', body, config)
    .then(resp => {
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          token: resp.data.token,
          user: resp.data.user,
        },
      });
    })
    .catch(err => {
      dispatch({
        type: 'LOGIN_FAILED',
        payload: { errors: err.response.data.errors },
      });
    });
};

export const signOut = () => dispatch => {
  dispatch({ type: 'LOGOUT' });
};
