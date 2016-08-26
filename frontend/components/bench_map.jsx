import React from 'react';

class BenchMap extends React.Component {

  componentDidMount(){
    const mapDOMNode = this.refs.map;

    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  }
  render(){
    return(
      <div id='map-container' ref='map'>
        HELLO I AM THE BENCH MAP
      </div>
    );
  }
}

export default BenchMap;
