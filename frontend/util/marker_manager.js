
class MarkerManager {
    constructor(map) {
        this.map = map;
        this.createMarker = this.createMarker.bind(this);
        this.markers = {};
    }
    
      updateMarkers(spots) {
        const spotObj = {};
            spots.forEach(spot => spotObj[spot.id] = spot);
        
        spots
            .filter(spot => !this.markers[spot.id])
            .forEach(spot => {
                this.createMarker(spot)
            
            });

        Object.values(this.markers)
            .filter(spot => !spotObj[spot.id])
            .forEach(spot => {
                this.removeMarker(spot)
                delete this.markers[spot.id]
            })

      }


      createMarker(spot) {
       this.markers[spot.id] = new google.maps.Marker({
            id: spot.id,
            position: new google.maps.LatLng(spot.latitude, spot.longitude),
            map: this.map,
            title: spot.name
        })
      }

      removeMarker(spot) {
          this.markers[spot.id].setMap(null);
          delete this.markers[spot.id]
      }

}

export default MarkerManager;



