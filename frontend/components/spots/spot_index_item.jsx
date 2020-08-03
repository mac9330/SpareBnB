import React from 'react';
import {Link} from "react-router-dom"

const SpotIndexItem = ({spot}) => (
    <li>
        <h3>{spot.name}</h3>
        <p>{spot.description}</p>
        <p>{spot.price}</p>
        <Link to={`/spots/${spot.id}`}></Link>
    </li>
)

export default SpotIndexItem;