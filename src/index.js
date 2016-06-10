import 'babel-polyfill'
import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { reduxObservable } from 'redux-observable'
import { Provider } from 'react-redux'
import * as timer from './timer'

const createStoreWithMiddleware = applyMiddleware(reduxObservable())(createStore)

const store = createStoreWithMiddleware(timer.reducer)

const Root = () => (
  <Provider store={store}>
    <timer.View/>
  </Provider>
)

ReactDOM.render(<Root/>, document.getElementById('root'))
