import { connect } from 'react-redux';
import { requestBenches } from '../actions/bench_actions';
import Search from './search';
import { markerHover } from '../actions/filter_actions';


const mapStateToProps = state => ({
  benches: state.benches,
  lightUpMarker: state.filter.hoverMarker
});

const mapDispatchToProps = dispatch => ({
   requestBenches: (bounds) => dispatch(requestBenches(bounds)),
   markerHover: (bench) => dispatch(markerHover(bench))
 });


 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(Search);
