import React from "react";

export default () => (
    <div >
        <div className="no-page-found">
            <div className="message">
                <h1>Oops!</h1>
                <h2>We can't seem to find the page you're looking for. </h2>
                <h3>Error code: 404</h3>
                <ul>
                    <li><p>Here are some helpful links instead:</p></li>
                    <li><a href="/"><p>Home</p></a></li>
                </ul>
            </div>
            <img src="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif"></img>
        </div>
    </div>
)