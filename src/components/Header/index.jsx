import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TOKEN_KEY } from '../../middlewares/auth';

//import PropTypes from 'prop-types';

import HeaderStyled from './style';

class Header extends Component {
  logout = e => {
    e.preventDefault();
    global.localStorage.removeItem(TOKEN_KEY);
    window.location.pathname = '/';
  };
  render() {
    return (
      <HeaderStyled key="header">
        <div className="row">
          <div className="col-md-3">
            <div className="header-logo">
              <Link to="/">
                <span className="">Logo</span>
              </Link>
            </div>
          </div>
          <div className="col-md-7"></div>
          <div className="col-md-2 text-right d-none d-md-block">
            <p className="btn btn-primary mt-4 mr-4" onClick={this.logout}>
              LOGOUT
            </p>
          </div>
        </div>
      </HeaderStyled>
    );
  }
}

Header.defaultProps = {};

Header.propTypes = {};

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
