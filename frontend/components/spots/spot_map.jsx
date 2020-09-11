import React from "react"
import MarkerManager from "../../util/marker_manager"
import {withRouter} from 'react-router-dom'


class SpotMap extends React.Component {
    
    componentDidMount() {
        document.getElementById("footer").className = "hidden-footer"
        const mapOptions = {
            center: { lat: parseFloat(this.props.lat), lng: parseFloat(this.props.lng) },
            zoom: 12
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.filterBounds();
        
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.spots);
    }

    componentWillUnmount() {
        document.getElementById("footer").className = "footer"
    }



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
            <div className="spot-map" id="map" ref={map => this.mapNode = map}>
                Spots Map?
            </div>
        )
    }
}

export default withRouter(SpotMap);