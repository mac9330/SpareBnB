import React from "react"
import {Link} from 'react-router-dom'

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


      createSingleMarker(spot) {
       this.markers[spot.id] = new google.maps.Marker({
            id: spot.id,
            position: new google.maps.LatLng(spot.latitude, spot.longitude),
            map: this.map,
            title: spot.name,
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 20,
                },
        })
      }

      createMarker(spot) {
          const image = {
              url: 'http://www.homedepot.com/catalog/swatchImages/35/04/04a604de-8b52-4cd8-a394-6286f00b438d_35.jpg',
              size: new google.maps.Size(35, 35),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(0, 35)
          };
        this.markers[spot.id] = new google.maps.Marker({
            id: spot.id,
            position: new google.maps.LatLng(spot.latitude, spot.longitude),
            map: this.map,
            title: spot.name,
            icon: image,
            url: `https://sparebnb.herokuapp.com/#/spots/${spot.id}`,
            label: {
                text: `$${spot.price}`,
                color: 'white',
                fontSize: '13px',
                fontWeight: 'bold', 
            },
        })
        this.attachInfo(this.markers[spot.id], spot)
      }

        attachInfo(marker, spot) {
            const infowindow = new google.maps.InfoWindow({
              content: spot.name
            }); 
            marker.addListener("mouseover", () => {
                infowindow.open(marker.get("map"), marker);
            });
            marker.addListener("mouseout", () => {
                infowindow.close(marker.get("map"), marker);
            });
            marker.addListener('click', () => {
                window.location.href = `/#/spots/${spot.id}`
            });
    }

      removeMarker(spot) {
          this.markers[spot.id].setMap(null);
          delete this.markers[spot.id]
      }

}




export default MarkerManager;



