import React from 'react';
import ReactDOM from 'react-dom';

import './utils/fonts/style.css';
import './utils/css/bootstrap.css';
import './utils/css/global.css';
import './utils/css/animate.css';

import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './store/Redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
