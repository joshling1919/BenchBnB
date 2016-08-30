import configureStore from './store/store';
import React from 'react';
import ReactDOM from 'react-dom';


import {
    BenchConstants,
    requestBenches,
    receiveBenches
  } from './actions/bench_actions';

import {
    signUp,
    logIn,
    logOut
  } from './actions/session_actions';

import { fetchBenches } from './util/bench_api_util';

import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = { benches: {}, filter: {}, session: {} };
  const store = configureStore(preloadedState);
  window.signup = signUp;
  window.login = logIn;
  window.logout = logOut;
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
