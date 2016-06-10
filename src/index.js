import 'babel-polyfill'
import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import * as timer from './timer'

const sagaMiddleware = createSagaMiddleware()
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore)

const store = createStoreWithMiddleware(timer.reducer)

const Root = () => (
  <Provider store={store}>
    <timer.View/>
  </Provider>
)

sagaMiddleware.run(timer.saga)

ReactDOM.render(<Root/>, document.getElementById('root'))
