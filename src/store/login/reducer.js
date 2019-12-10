import * as types from './actionTypes';

const initialState = {
  loginData: '',
  loginError: '',
  userEmail: '',
  token: '',
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_LOGIN_DATA: {
      return {
        ...state,
        loginData: { ...action.loginData, error: false },
      };
    }
    case types.SET_EMAIL:
      return {
        ...state,
        userEmail: { ...action.userEmail, error: false },
      };
    case types.SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: { ...action.loginError, error: true },
      };
    case types.SET_CONFIG:
      return {
        ...state,
        userConfig: { ...action.userConfig },
      };
    default:
      return state;
  }
}
