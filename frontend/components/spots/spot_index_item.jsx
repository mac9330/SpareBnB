import React from 'react';

const SpotIndexItem = ({spot}) => (
    <li>
        <h3>{spot.name}</h3>
        <p>{spot.description}</p>
        <p>{spot.price}</p>
    </li>
)

export default SpotIndexItem;