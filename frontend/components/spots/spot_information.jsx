import React from 'react'
import {Link} from 'react-router-dom'


export default (props) => {

    const spot = props ? props.spot : null;
    const name = spot ? spot.name : null;
    const description = spot ? spot.description : null;
    const price = spot ? spot.price : null;
    const user = spot ? spot.user : null;
    const photos = spot ? spot.photoUrls : [];
    const owner_name = user ? user.fname : null;
    // other option -- 
    // check if props.spot exists then render null until props.spot exists  

    return (
        <div>
            <h1 className="show-heading">{name}</h1>
            <br/>
            <Link to="/" className="city-link"><p>ToDo reverse geocode for city and link to city page</p></Link>
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
            <p className="spot-description">{description}</p>
            <p className="spot-price"><span className="single-spot-price">${price}</span>/ night</p>
            <p>{owner_name}</p>
        </div>

    )
}