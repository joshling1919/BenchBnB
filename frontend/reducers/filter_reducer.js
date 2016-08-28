import { FilterConstants } from '../actions/filter_actions';
import { merge } from 'lodash';

const FilterReducer = (filterState = {}, action) => {
  switch(action.type){
    case FilterConstants.MARKER_HOVER:
      return merge({}, filterState, { hoverMarker: action.bench });
    default:
      return filterState;
  }
};

export default FilterReducer;
