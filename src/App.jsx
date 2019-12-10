import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'store/Redux';
import { connect } from 'react-redux';

import * as LoginSelectors from 'store/login/selectors';

import Containers from './containers';
import { isAuthenticated } from './middlewares/auth';

const mapStateToProps = state => ({
  loginData: state.login.loginData,
  token: LoginSelectors.getToken(state),
});

const mapDispatchToProps = dispatch => ({});

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const App = props => (
  <ConnectedRouter key="router" history={history}>
    <Switch>
      <Route
        key="Login"
        name="Login"
        exact
        path="/"
        component={Containers.Login}
      />
      <Route
        key="Fail"
        name="Fail"
        exact
        path="/fail"
        component={Containers.Login}
      />

      <PrivateRoute path="/admin" component={Containers.Admin} />
    </Switch>
  </ConnectedRouter>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
