// authActions.js
import { LOGIN_SUCCESS, LOGOUT } from './actionTypes';

// Action to handle user login
export const login = (userData) => {
  return (dispatch) => {
    // Assuming login API is successful and you get userData & token
    localStorage.setItem('userToken', userData.token); // Store token in localStorage

    dispatch({
      type: LOGIN_SUCCESS,
      payload: userData,
    });
  };
};

// Action to handle user logout
export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('userToken'); // Clear token from localStorage
    dispatch({
      type: LOGOUT,
    });
  };
};
