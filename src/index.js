import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'popper.js/dist/umd/popper.min.js'
import 'jquery/dist/jquery.min.js'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux"
import myReducer from './redux/reducers'
import thunk from 'redux-thunk'

const store = createStore (
  myReducer,
  applyMiddleware(thunk),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
