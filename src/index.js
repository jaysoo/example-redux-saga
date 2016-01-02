import 'babel-polyfill';
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import sagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import * as Timer from './timer';

const createStoreWithMiddleware = applyMiddleware(
  sagaMiddleware(...Timer.sagas)
)(createStore);

const store = createStoreWithMiddleware(Timer.reducer);

const Root = () => (
  <Provider store={store}>
    <Timer.View/>
  </Provider>
);

ReactDOM.render(<Root/>, document.getElementById('root'));
