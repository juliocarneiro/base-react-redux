import React, { Fragment } from 'react';

import { connect } from 'react-redux';
import Loading from 'components/Loading';
import Alerta from 'components/Alerta';
import Header from 'components/Header';
import Aside from 'components/Aside';

const Logged = Content => {
  const mapStateToProps = state => ({});
  const mapDispatchToProps = dispatch => ({});

  const LoggedConnected = props => (
    <Fragment>
      <Alerta />
      <Loading />
      <Header />
      <div className="container-fluid pl-0">
        <div className="row">
          <div key="aside" className="col-md-3">
            <div className="sticky-top">
              <Aside />
            </div>
          </div>
          <div key="content" className="col-md-9">
            <Content />
          </div>
        </div>
      </div>
    </Fragment>
  );

  return connect(mapStateToProps, mapDispatchToProps)(LoggedConnected);
};

export default Logged;
