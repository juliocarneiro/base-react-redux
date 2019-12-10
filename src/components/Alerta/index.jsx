import React, { Component } from 'react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AlertaStyled from './style';
import * as AlertActions from '../../store/alerta/actions';
import { motion } from 'framer-motion';

class Alerta extends Component {
  render() {
    const menu_variants = {
      open: { opacity: 1, y: 0, transition: 'all .2s ease' },
      hidden: { opacity: 0, y: -2000, transition: 'all .2s ease' },
    };
    // console.log('this.props.alerta.route', this.props.alerta);
    return (
      <AlertaStyled key="alerta">
        <motion.div
          onClick={() =>
            this.props.toggle({
              show: false,
              route: this.props.alerta.route,
            })
          }
          initial="hidden"
          animate={this.props.alerta.alert ? 'open' : 'hidden'}
          variants={menu_variants}
        >
          <div>
            <h2>{this.props.alerta.title ? this.props.alerta.title : ''}</h2>
            <p>
              {this.props.alerta.description
                ? this.props.alerta.description
                : ''}
            </p>
            <Link className="btn btn-primary" to={this.props.alerta.route}>
              OK
            </Link>
          </div>
        </motion.div>
      </AlertaStyled>
    );
  }
}

Alerta.propTypes = {
  alerta: PropTypes.object,
};

const mapStateToProps = state => ({ alerta: state.alerta });
const mapDispatchToProps = dispatch => ({
  toggle: data => {
    dispatch(AlertActions.setAlert(data));
    dispatch(push(data.route));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Alerta);
