import { BenchConstants, receiveBenches, requestBenches } from '../actions/bench_actions.js';
import { fetchBenches } from '../util/bench_api_util';
import { FilterConstants } from '../actions/filter_actions.js';

  const BenchesMiddleware = store => next => action => {
    switch(action.type){
      case BenchConstants.REQUEST_BENCHES:
        const success = data => store.dispatch(receiveBenches(data));
        fetchBenches(action.bounds, success);
        return next(action);
      default:
        return next(action);
    }
  };

  export default BenchesMiddleware;
