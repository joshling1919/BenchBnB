import { BenchConstants } from '../actions/bench_actions';

const BenchesReducer = (benchState = {}, action) => {
  switch(action.type){
    case BenchConstants.RECEIVE_BENCHES:
      return action.benches;
    default:
      return benchState;
  }
};

export default BenchesReducer;
