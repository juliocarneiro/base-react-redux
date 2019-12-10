import React from 'react';

import { connect } from 'react-redux';
import * as LoadingSelectors from 'store/loading/selectors';
import PropTypes from 'prop-types';

import LoadingStyled from './style';

const Loading = props =>
  props.isLoading && (
    <LoadingStyled key="loading" className="animated faster fadeIn">
      <div className="loader">
        <div className="loader-content">
          <span className="dots"></span>
          <span className="dots"></span>
          <span className="dots"></span>
          <span className="dots"></span>
          <span className="dots"></span>
          <span className="dots"></span>
          <span className="dots"></span>
          <span className="dots"></span>
          <span className="dots"></span>
          <span className="dots"></span>
          <div className="loader-txt">Carregando...</div>
        </div>
      </div>
    </LoadingStyled>
  );

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLoading: LoadingSelectors.isLoading(state),
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
