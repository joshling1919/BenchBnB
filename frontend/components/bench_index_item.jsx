import React from 'react';
import MarkerManager from '../util/marker_manager';

class BenchIndexItem extends React.Component {
  lightUpMarker(bench){
    this.props.markerHover(bench);
  }

  render() {
    const { bench } = this.props;
    return(
      <li className="index-item"
        onMouseOver={this.lightUpMarker.bind(this, bench)}
        onMouseOut={this.lightUpMarker.bind(this, null)}>
        Description: {bench.description}{' '}
        (Latitude: {bench.lat},{' '}
        Longitude: {bench.lng})
      </li>
    );
  }
}


export default BenchIndexItem;
