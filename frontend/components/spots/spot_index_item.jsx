import React from 'react';
import {Link} from "react-router-dom"
// todo add amenitites
const SpotIndexItem = ({spot}) => {
    return(
    <li className="spot-idx-item">
        <div className="item-details">
                <Link to={`/spots/${spot.id}`}><img className="spot-img" src={`${spot.photoUrls[0]}`} /></Link>
            <br/>
            <div className="item-info">
                <Link to={`/spots/${spot.id}`}><h3 className="spot-name"> {spot.name}</h3></Link>
                <br/>
                <p className="idx-accomadations"> {spot.max_occupancy} guests <span>&#183;</span> {spot.num_bedrooms} bedrooms <span>&#183;</span> {spot.num_beds} beds <span>&#183;</span>  {spot.num_bathrooms} baths  </p>
                <br/>
                {/* {<p className="idx-amenities">Wifi <span>&#183;</span> Air Conditioning <span>&#183;</span> Pool <span>&#183;</span> Grill <span>&#183;</span> Outdoor Shower</p> } */}
                <br/>
                <div className="spot-price-con">
                        <p className="spot-price"><span>${spot.price}</span> / night &emsp;</p>
                </div>
            <hr className="hr-fix" />
            </div>
        </div>
        
    </li>
    )
}

export default SpotIndexItem;