class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = [];
  }

  updateMarkers(benches){
    console.log('time to update');
    let markerManager = this;
    this._benchesToAdd(benches).forEach(bench => {
      markerManager._createMarkerFromBench(bench);
    });
  }

  _benchesToAdd(benches){
    let benchesToAdd = [];
    let markerManager = this;
    Object.keys(benches).forEach(id => {
      if (markerManager.markers.indexOf(benches[id]) === -1) {
        benchesToAdd.push(benches[id]);
      }
    });
    return benchesToAdd;
  }

  _createMarkerFromBench(bench) {
    let benchLatLng = {lat: bench.lat, lng: bench.lng};
    let marker = new google.maps.Marker({
      position: benchLatLng,
      map: this.map
    });
    this.markers.push(marker);
    return marker;
  }
}


export default MarkerManager;
