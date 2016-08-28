import React from 'react';
import MarkerManager from '../util/marker_manager';

class BenchIndexItem extends React.Component {
  lightUpMarker(bench){
    console.log('hover');
  }

  render() {
    const { bench } = this.props;
    return(
      <li className="index-item"
        onMouseEnter={this.lightUpMarker.bind(this, bench)}>
        Description: {bench.description}{' '}
        (Latitude: {bench.lat},{' '}
        Longitude: {bench.lng})
      </li>
    );
  }
}


export default BenchIndexItem;
