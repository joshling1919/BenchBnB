import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';

import {
    BenchConstants,
    requestBenches,
    receiveBenches
  } from './actions/bench_actions';

import { fetchBenches } from './util/bench_api_util';

import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = { benches: {} };
  const store = configureStore(preloadedState);
  window.requestBenches = requestBenches;
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
