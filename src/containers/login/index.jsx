import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as LoginActions from 'store/login/actions';
import * as LoginSelectors from 'store/login/selectors';

import DefaultLayout from 'layouts/default';

import LoginStyled from './style';

class Login extends Component {
  state = {
    password: '',
    email: '',
  };

  handleInputChange = (self, changeEvent) => {
    self.setState({
      [changeEvent.target.name]: changeEvent.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { getLoginData } = this.props;
    const { state } = this;

    if (state.email.length) {
      getLoginData(state);

      setInterval(() => {
        getLoginData(state);
      }, 1800000);
    }
  };

  render() {
    const { password, email } = this.state;

    return (
      <LoginStyled key="login" className="animated fadeIn faster">
        <div className="container" id="Login">
          <div className="row banner text-center">
            <div className="col-md-12 home-loginbox">
              <form onSubmit={this.handleSubmit}>
                <div className="wrapper">
                  <input
                    placeholder="E-mail"
                    name="email"
                    onChange={event => this.handleInputChange(this, event)}
                    value={email}
                  />
                  <br />
                  <input
                    placeholder="Senha"
                    type="password"
                    name="password"
                    onChange={event => this.handleInputChange(this, event)}
                    value={password}
                  />
                  {this.props.loginError.error ? (
                    <div className="mt-0 text-danger">
                      Usuário ou senha inválidos.
                    </div>
                  ) : null}
                </div>

                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </LoginStyled>
    );
  }
}

const mapStateToProps = state => ({
  loginData: state.login.loginData,
  loginError: state.login.loginError,
  userEmail: state.login.userEmail,
  token: LoginSelectors.getToken(state),
});

const mapDispatchToProps = dispatch => ({
  getLoginData: ({ ...state }) => {
    dispatch(LoginActions.getLoginData(state));
  },
});

export default DefaultLayout(
  connect(mapStateToProps, mapDispatchToProps)(Login)
);
