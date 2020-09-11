import React from "react"
import MarkerManager from "../../util/marker_manager"
import { withRouter } from 'react-router-dom'

// maps api does not work heroku



class SingleSpotMap extends React.Component {

    constructor(props) {
        super(props)
        this.props.fetchSpot(this.props.spotId)
    }

    componentDidMount() {
    }

    componentDidUpdate() {
        if (this.props.spot) {
            const mapOptions = {
                center: {
                    lat: this.props.spot.latitude,
                    lng: this.props.spot.longitude
                },
                zoom: 13
            };
            this.map = new google.maps.Map(this.mapNode, mapOptions);
            this.MarkerManager = new MarkerManager(this.map);
            this.MarkerManager.createSingleMarker(this.props.spot)
        }

    }




    render() {
        return (
            <div className="spot-map" id="map" ref={map => this.mapNode = map}>
                Spot Map?
            </div>
        )
    }
}

export default withRouter(SingleSpotMap);