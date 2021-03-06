import React from 'react';
import MarkerManager from '../util/marker_manager';
import { withRouter } from 'react-router';

class BenchMap extends React.Component {

  componentDidMount(){
    const mapDOMNode = this.refs.map;

    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.listenForMove();
    this.listenForClick();
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  listenForClick() {
    let benchMap = this;
    google.maps.event.addListener(this.map, 'click', (e) => {
      let coords = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      };
      benchMap._handleClick(coords);
    });
  }

  _handleClick(coords){
   this.props.router.push({
     pathname: "benches/new",
     query: coords
   });
 }

  listenForMove() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const bounds = this.map.getBounds();
      this.props.requestBenches({
        northEast: {
          lat: bounds.getNorthEast().lat(),
          lng: bounds.getNorthEast().lng()
        },
        southWest: {
          lat: bounds.getSouthWest().lat(),
          lng: bounds.getSouthWest().lng()
        }
      });
    });
  }

  componentDidUpdate() {
    this.MarkerManager.lightUpMarker(this.props.lightUpMarker);
    this.MarkerManager.updateMarkers(this.props.benches);
  }
  render(){
    return(
      <div ref='map' className="bench-map">
        HELLO I AM THE BENCH MAP
      </div>
    );
  }
}

export default withRouter(BenchMap);
