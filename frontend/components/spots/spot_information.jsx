import React from 'react'
import {Link} from 'react-router-dom'


export default (props) => {

    const spot = props ? props.spot : null;
    const name = spot ? spot.name : null;
    const description = spot ? spot.description : null;
    const price = spot ? spot.price : null;
    const user = spot ? spot.user : null;
    const owner_name = user ? user.fname : null

    return (
        <div>
            <h1 className="show-heading">{name}</h1>
            <br/>
            <Link to="/" className="city-link"><p>ToDo reverse geocode for city and link to city page</p></Link>
            <div className="img-show">
                <ul className="ul-container">
                    <div className="flex-container-container">
                        <div className='div-flex'>
                            <li className="main-img">
                                <img className="pres-image" src="https://a0.muscache.com/im/pictures/6080d6b0-1cb6-4f44-9776-1892e99c9c81.jpg?im_w=1200"/>
                            </li>
                        </div>
                        <div className="div-flex2">
                            <li className="side-img">
                                <img src="https://a0.muscache.com/im/pictures/b66cde3a-6aa9-4fbd-a77f-3e3f84545cd8.jpg?im_w=720" />
                            </li>
                            <li className="side-img">
                                <img className="top-right" src="https://a0.muscache.com/im/pictures/b66cde3a-6aa9-4fbd-a77f-3e3f84545cd8.jpg?im_w=720"/>
                            </li>
                            <li className="side-img">
                                <img src="https://a0.muscache.com/im/pictures/0e493992-a094-4b6f-b5b3-ae64df2c42e5.jpg?im_w=720"/>
                            </li>
                            <li className="side-img">
                                <img className="bot-right" src="https://a0.muscache.com/im/pictures/27e2a776-b085-4dfa-8ce5-f876c1e09566.jpg?im_w=720"/>
                            </li>
                        </div>
                    </div>
                </ul>


            </div>
            <p>{description}</p>
            <p>{price}</p>
            <p>{owner_name}</p>
        </div>

    )
}