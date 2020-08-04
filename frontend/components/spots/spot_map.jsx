import React from "react"
import MarkerManager from "../../util/marker_manager"

// todo login/logout dropdown is stuck behind maps api
// maps api does not work heroku

class SpotMap extends React.Component {

    
    componentDidMount() {
        debugger;
        const mapOptions = {
            center: { lat: 40.730610, lng: -73.935242 },
            zoom: 12
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.filterBounds();
        
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.spots);
        // this.filterBounds();
    }

    // addListener() {
    //     google.maps.event.addListener(this.map, 'idle', () => {

    //         const northEast = this.map.getBounds().getNorthEast();
    //         const southWest = this.map.getBounds().getSouthWest();
    //         const bounds = {
    //             northEast: {lat: northEast.lat(), lng: northEast.lng()},
    //             southWest: {lat: southWest.lat(), lng: northEast.lng()}
    //         };
    //         this.props.updateBounds(bounds);;
    //         this.MarkerManager.updateMarkers(this.props.spots)
    //     });
    // }

    filterBounds() {
        this.map.addListener('idle', () => {
            const latLongBnds = this.map.getBounds();
            const northEastLat = latLongBnds.getNorthEast().lat();
            const northEastLng = latLongBnds.getNorthEast().lng();
            const southWestLat = latLongBnds.getSouthWest().lat();
            const southWestLng = latLongBnds.getSouthWest().lng();
            const bounds = { southWest: { lat: southWestLat, lng: southWestLng }, northEast: { lat: northEastLat, lng: northEastLng } };
            this.props.updateBounds(bounds);
        })
    }

    



    render() {
        return (
            <div className="spot-map" ref={map => this.mapNode = map}>
                Spots Map?
            </div>
        )
    }
}

export default SpotMap;