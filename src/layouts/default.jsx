import React, { Fragment } from 'react';

import { connect } from 'react-redux';
import Loading from 'components/Loading';
import Alerta from 'components/Alerta';
//import Header from 'components/Header';

const Layout = Content => {
  const mapStateToProps = state => ({});
  const mapDispatchToProps = dispatch => ({});

  const LayoutConnected = props => (
    <Fragment>
      <Alerta />
      <div className="">
        <Loading />
        <div key="content">
          <Content />
        </div>
      </div>
    </Fragment>
  );

  return connect(mapStateToProps, mapDispatchToProps)(LayoutConnected);
};

export default Layout;
