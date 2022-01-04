import { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
// utils
import axios from '../utils/axios';
import { isValidToken, setSession } from '../utils/jwt';

// ----------------------------------------------------------------------

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
  token: null,
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user
    };
  },
  LOGIN: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user
    };
  },
  REFRESH: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null
  }),
  REGISTER: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user
    };
  },
  FORGOT_PASSWORD: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: false,
      user: null
    };
  },
  RESET_PASSWORD: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: false,
      user: null
    };
  }
};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

const AuthContext = createContext({
  ...initialState,
  method: 'jwt',
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  refresh: () => Promise.resolve(),
  register: () => Promise.resolve(),
  forgotPassword: () => Promise.resolve(),
  resetPassword: () => Promise.resolve()
});

AuthProvider.propTypes = {
  children: PropTypes.node
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem('accessToken');
        const refreshToken = window.localStorage.getItem('refreshToken');
        console.log('accessToken', accessToken, refreshToken);
        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);

          const response = await axios.get('/auth/profile');
          console.log('getUserProfile response:', response);
          const { user } = response.data;

          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: true,
              user
            }
          });
        } else if (refreshToken && isValidToken(refreshToken)){ // check if refreshToken exists, call refreshToken api
          const response = await axios.post('/auth/refresh-tokens', {
            refreshToken
          });
          console.log('response refreshToken:', response);
      
          const userProfileResponse = await axios.get('/auth/profile');
          console.log('response getuserProfile:', userProfileResponse);
      
          const { user } = userProfileResponse;
      
          setSession(response);
          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthenticated: true,
              user,
            }
          });
          
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false,
              user: null
            }
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null
          }
        });
      }
    };

    initialize();
  }, []);

  const login = async (email, password) => {
    const response = await axios.post('/auth/login', {
      email,
      password
    });
    console.log('response login:', response);

    const { tokens, user } = response.data;

    setSession(tokens);
    dispatch({
      type: 'LOGIN',
      payload: {
        user
      }
    });
  };

  const refresh = async (refreshToken) => {
    const response = await axios.post('/auth/refresh-tokens', {
      refreshToken
    });
    console.log('response refreshToken:', response);

    const userProfileResponse = await axios.get('/auth/profile');
    console.log('response getuserProfile:', userProfileResponse);

    const { user } = userProfileResponse;

    setSession(response);
    dispatch({
      type: "REFRESH",
      payload: {
        user,
      }
    });
  }

  const register = async (email, password, firstName, lastName) => {
    const response = await axios.post('/api/account/register', {
      email,
      password,
      firstName,
      lastName
    });
    const { user } = response.data;

    dispatch({
      type: 'REGISTER',
      payload: {
        user
      }
    });
  };

  const logout = async () => {
    setSession(null);
    dispatch({ type: 'LOGOUT' });
  };

  const resetPassword = async (email) => {
    console.log('reset Password', email);
    dispatch({ type: 'RESET_PASSWORD' });
  };

  const forgotPassword = async (email) => {
    console.log('forgot Password', email);
    dispatch({ type: 'FORGOT_PASSWORD' });
  };

  const updateProfile = () => {};

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        login,
        logout,
        register,
        resetPassword,
        forgotPassword,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
