import btoa from 'btoa';
import * as LayoutActions from 'store/loading/actions';
import * as AlertActions from 'store/alerta/actions';
import * as types from './actionTypes';
import { callService } from '../../utils/callService';
import { push } from 'connected-react-router';
import ENV from '../../env'; //eslint-disable-line
import { TOKEN_KEY } from '../../middlewares/auth';
const { BASE_URL } = ENV;

export const setLoginData = loginData => ({
  type: types.SET_LOGIN_DATA,
  loginData,
  loading: false,
});
export const setLoginError = loginError => ({
  type: types.SET_LOGIN_ERROR,
  loginError,
  loading: false,
});
export const setEmail = userEmail => ({
  type: types.SET_EMAIL,
  userEmail,
  loading: false,
});

export const getLoginData = state => (dispatch, getState) => {
  const { login } = getState();

  if (
    login.loginData.token === '' ||
    typeof login.loginData.token === 'undefined'
  ) {
    dispatch(LayoutActions.setLoading(true));
  }

  const headers = {
    Authorization: `Basic ${btoa('prfinanceiro:rQ4GuQHx')}`,
  };
  const user = {
    email: state.email,
    password: state.password,
  };

  callService(`${BASE_URL}/auth`, 'POST', user, headers)
    .then(response => {
      dispatch(setLoginData(response));
      localStorage.setItem(TOKEN_KEY, response.token);
      dispatch(setEmail(user));
      dispatch(push('/admin'));
      dispatch(LayoutActions.setLoading(false));
    })
    .catch(err => {
      dispatch(
        AlertActions.setAlert({
          alert: true,
          title: 'Oops, algo aconteceu...',
          description: err.message
            ? err.message
            : 'Tente novamente mais tarde.',
          route: '/',
        })
      );
      dispatch(LayoutActions.setLoading(false));
    });
};
