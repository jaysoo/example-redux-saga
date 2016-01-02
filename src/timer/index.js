import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import { Timer } from './components';
import actions from './actions';
import reducer from './reducer';
import sagas from './sagas';

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const View = connect(mapStateToProps, mapDispatchToProps)(Timer);

export { actions
       , reducer
       , sagas
       , View
       };

