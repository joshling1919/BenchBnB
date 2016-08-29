import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';

import SearchContainer from './search_container';
import BenchFormContainer from './bench_form_container';
import BenchContainer from './bench_container';


const AppRouter = () => (
  <Router history={ hashHistory }>
     <Route path="/" component={ App } >
       <IndexRoute component={ SearchContainer } />
       <Route path="benches/new" component={ BenchFormContainer } />
       <Route path="benches/:id" component={ BenchContainer } />
     </Route>
  </Router>
);


export default AppRouter;
