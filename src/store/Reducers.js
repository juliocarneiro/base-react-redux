import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import alerta from './alerta/reducer';
import loading from './loading/reducer';
import layout from './layout/reducer';
import login from './login/reducer';

export default history =>
  combineReducers({
    loading,
    layout,
    login,
    alerta,
    router: connectRouter(history),
  });
