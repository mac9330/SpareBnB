import React from 'react';
import {Link} from "react-router-dom"
// todo add amenitites
const SpotIndexItem = ({spot}) => (
    <li className="spot-idx-item">
        <div className="item-details">
            <img className="spot-img" src="https://images.unsplash.com/photo-1585531455700-7af2f103924d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
            <br/>
            <div className="item-info">
                <Link to={`/spots/${spot.id}`}><h3 className="spot-name"> {spot.name}</h3></Link>
                <br/>
                <p className="idx-accomadations"> {spot.max_occupancy} guests <span>&#183;</span> {spot.num_bedrooms} bedrooms <span>&#183;</span> {spot.num_beds} beds <span>&#183;</span>  {spot.num_bathrooms} baths  </p>
                <br/>
                <p className="idx-amenities">Wifi <span>&#183;</span> Air Conditioning <span>&#183;</span> Pool <span>&#183;</span> Grill <span>&#183;</span> Outdoor Shower</p> 
                <br/>
                <div className="spot-price-con">
                    <div></div>
                    <p className="spot-price"><span>{spot.price}</span> / night</p>
                </div>
            <hr className="hr-fix" />
            </div>
        </div>
        
    </li>
)

export default SpotIndexItem;