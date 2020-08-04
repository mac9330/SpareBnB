import React from 'react'


export default (props) => {

    const spot = props ? props.spot : null;
    const name = spot ? spot.name : null;
    const description = spot ? spot.description : null;
    const price = spot ? spot.price : null;

    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{price}</p>
        </div>

    )
}