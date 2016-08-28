class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = [];
  }

  updateMarkers(benches){
    let markerManager = this;
    this._markersToRemove(benches).forEach(marker => {
      markerManager._removeMarker(marker);
    });
    this._benchesToAdd(benches).forEach(bench => {
      markerManager._createMarkerFromBench(bench);
    });
  }

  _benchesToAdd(benches){
    let benchesToAdd = [];
    let markerManager = this;
    let markersIdArray = this.markers.map(marker => marker.benchId);
    Object.keys(benches).forEach(id => {
      if (markersIdArray.indexOf(parseInt(id)) === -1) {
        benchesToAdd.push(benches[id]);
      }
    });
    return benchesToAdd;
  }

  lightUpMarker(bench){
    let benchPos;
    if (bench) {
      benchPos = new google.maps.LatLng(bench.lat, bench.lng);
    }
    if (benchPos) {
      this.markers.forEach(marker => {
        if (benchPos.equals(marker.getPosition())) {
          marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
        }
      });
    } else {
      this.markers.forEach(marker => {
        marker.setIcon('http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569');
      });
    }
  }

  _markersToRemove(benches){
    let markersToRemove = [];
    let benchesArrayIds = Object.keys(benches).map(id => parseInt(id));
    let markerManager = this;
    this.markers.forEach(marker => {
      if (benchesArrayIds.indexOf(marker.benchId) === -1) {
        markersToRemove.push(marker);
      }
    });
    return markersToRemove;
  }

  _removeMarker(marker){
    marker.setMap(null);
    let index = this.markers.indexOf(marker);
    this.markers.splice(index, 1);
  }
  _createMarkerFromBench(bench) {
    let benchLatLng = {lat: bench.lat, lng: bench.lng};
    let marker = new google.maps.Marker({
      position: benchLatLng,
      map: this.map,
      icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569',
      benchId: bench.id
    });
    this.markers.push(marker);
  }
}


export default MarkerManager;
