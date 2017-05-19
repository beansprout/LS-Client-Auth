import axios from 'axios';
const ROOT_URL = 'http://localhost:5000';

export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const USER_UNAUTHENTICATED = 'USER_UNAUTHENTICATED';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const GET_USERS = 'GET_USERS';

export const authError = (error) => {
  return {
    type: AUTHENTICATION_ERROR,
    payload: error,
  };
};

export const signOutUser = () => {
  localStorage.removeItem('token');
  // returns unauthenticated user (removes token from local storage)
  return {
    type: USER_UNAUTHENTICATED,
  };
};

export const signIn = (email, password, history) => {
  // signin runs from sign in component
  return (dispatch) => {
    // post / dispatch signin info
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // save token to local storage - that's what the following line is doing
        localStorage.setItem('token', response.data.token);
        // dispatch changes the state
        dispatch({
          // don't need payload
          // no security in client side
          // all for user experience
          // just flipping a flag for rendering
          type: USER_AUTHENTICATED,
        });
        history.push('/users');
      })
      .catch(() => {
        dispatch(authError('Incorrect email/password combo'));
      });
  };
};

export const getUsers = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        authorization: token,
      },
    };
    const promise = axios.get(`${ROOT_URL}/users`, config);
    promise.then(response => {
      console.log(response);
      dispatch({
        type: GET_USERS,
        payload: response.data,
      });
    });
  };
};

// export const signUpUsers = () => {
//   const user = new models.User(req.body)
// }