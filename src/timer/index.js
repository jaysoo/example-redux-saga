import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Timer } from './components'
import * as actions from './actions'
import { getFormattedTime, getStatus } from './reducer'

export reducer from './reducer'
export saga from './saga'

export const View = connect(
  state => ({
    time: getFormattedTime(state),
    status: getStatus(state)
  }),
  actions
)(Timer)
