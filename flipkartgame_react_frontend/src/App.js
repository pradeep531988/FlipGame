import 'moment/locale/pt-br';
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {rootReducer} from './reducers';
import {Component} from  'react';
import Initializer from './components/Initializer';
import history from './lib/history';
import {routerMiddleware} from "react-router-redux";
import ReactDOM from "react-dom";

const middleware = routerMiddleware(history);
const store = createStore(rootReducer, applyMiddleware(thunk, middleware));
window.store = store;

ReactDOM.render(
        <Provider store={store}>
            <Initializer />
        </Provider>
    ,  document.getElementById('root'));