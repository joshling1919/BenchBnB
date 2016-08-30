import { BenchConstants, receiveBenches, requestBenches, receiveBench } from '../actions/bench_actions.js';
import { fetchBenches, createBench } from '../util/bench_api_util';
import { FilterConstants } from '../actions/filter_actions.js';

  const BenchesMiddleware = store => next => action => {
    switch(action.type){
      case BenchConstants.REQUEST_BENCHES:
        const success = data => store.dispatch(receiveBenches(data));
        fetchBenches(action.bounds, success);
        return next(action);
      case BenchConstants.CREATE_BENCH:
        const createSuccess = bench => store.dispatch(receiveBench(bench));
        createBench(action.bench, createSuccess);
        return next(action);
      default:
        return next(action);
    }
  };

  export default BenchesMiddleware;
