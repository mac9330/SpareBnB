import React from 'react'
import {Link} from 'react-router-dom'
// const reverse = require("reverse-geocode");
import reverse from 'reverse-geocode'





 class SpotInfo extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            address: "",
            index: "/",
        }
    }

    componentDidUpdate() {
        if (this.state.address === "" && this.props.spot?.latitude) {
            const location = reverse.lookup(this.props.spot?.latitude, this.props.spot?.longitude, "us")
            this.setState({
              address: `${location.city}, ${location.state}`,
              index: `/spots?lat=${this.props.spot.latitude}.730610&lng=${this.props.spot.longitude}`,
            });
        }
    }

    render() {
        const spot = this.props.spot ? this.props.spot : null;
        const name = spot ? spot.name : null;
        const price = spot ? spot.price : null;
        const photos = spot ? spot.photoUrls : [];
        return (
          <div>
            <h1 className="show-heading">{name}</h1>
            <br />
            <Link to={this.state.index} className="city-link">
              <p>{this.state.address}</p>
            </Link>
            <div className="img-grid">
              <div className="img pres-image">
                <img className="pres-image" src={`${photos[0]}`} />
              </div>
              <div className="img top-mid">
                <img className="top-mid" src={`${photos[1]}`} />
              </div>
              <div className="img bot-mid">
                <img className="bot-mid" src={`${photos[3]}`} />
              </div>
              <div className="img top-right">
                <img className="top-right" src={`${photos[2]}`} />
              </div>
              <div className="img bot-right">
                <img className="bot-right" src={`${photos[4]}`} />
              </div>
            </div>
            <p className="spot-price">
              <span className="single-spot-price">${price}</span>/ night
            </p>
          </div>
        );
    }
}

export default SpotInfo;