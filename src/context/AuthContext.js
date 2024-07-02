import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import authReducer from '../reducers/authReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../types';

export const AuthContext = createContext();

const AuthState = ({ children }) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load user
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    const loadUser = async () => {
      try {
        const res = await axios.get('/api/auth');

        dispatch({ type: USER_LOADED, payload: res.data });
      } catch (err) {
        dispatch({ type: AUTH_ERROR });
      }
    };

    loadUser();
  }, []);

  // Register user
  const register = async formData => {
    try {
      const res = await axios.post('/api/auth/register', formData);

      dispatch({ type: REGISTER_SUCCESS, payload: res.data });

      loadUser();
    } catch (err) {
      dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg });
    }
  };

  // Login user
  const login = async formData => {
    try {
      const res = await axios.post('/api/auth/login', formData);

      dispatch({ type: LOGIN_SUCCESS, payload: res.data });

      loadUser();
    } catch (err) {
      dispatch({ type: LOGIN_FAIL, payload: err.response.data.msg });
    }
  };

  // Logout
  const logout = () => dispatch({ type: LOGOUT });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
