class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = [];
  }

  updateMarkers(benches){
    this._benchesToAdd(benches).forEach(bench => {
      this._createMarkerFromBench(bench);
    });
  }

  _benchesToAdd(benches){
    let benchesToAdd = [];
    Object.keys(benches).forEach(id => {
      if (this.markers.indexOf(benches[id]) === -1) {
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
  }
}


export default MarkerManager;
