import { BenchConstants } from '../actions/bench_actions';
import { merge } from 'lodash';
const BenchesReducer = (benchState = {}, action) => {
  switch(action.type){
    case BenchConstants.RECEIVE_BENCHES:
      return action.benches;
    case BenchConstants.RECEIVE_BENCH:
      let id = action.bench.id;
      return merge({}, benchState, { id: action.bench});
    default:
      return benchState;
  }
};

export default BenchesReducer;
