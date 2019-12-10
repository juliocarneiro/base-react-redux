import React, { Component } from 'react';
import { connect } from 'react-redux';
//import PropTypes from 'prop-types';

import AsideStyled from './style';

class Aside extends Component {
  render() {
    return (
      <AsideStyled key="aside">
        <p>teste</p>
      </AsideStyled>
    );
  }
}

Aside.propTypes = {};

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Aside);
