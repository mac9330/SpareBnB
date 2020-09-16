import React from "react"
import {Link} from "react-router-dom"


class Home extends React.Component {


    componentDidMount() {
        document.getElementById("header").className = "home-header"
    }

    componentWillUnmount() {
        document.getElementById("header").className = "header"
    }


    render() {
        return (
          <div className="locations-div">
            <h3>Your next escape</h3>
            <div className="home-locations">
              <br />
              <div className="location-container box-1">
                <Link
                  className="location-link ele-1"
                  to={`/spots?lat=40.730610&lng=-73.935242`}
                >
                  <span className="location-ele ele-2">
                    <img
                      src="https://a0.muscache.com/im/pictures/87e69a34-0b8d-4489-a3b1-68bb5c2a3547.jpg?aki_policy=large"
                      alt="New York City $119/night avg."
                    />
                    <span className="location-text ele-3">
                      New York City
                      <p>
                        <b>$119</b>/night avg.
                      </p>
                    </span>
                  </span>
                </Link>
              </div>

              <div className="location-container box-2">
                <Link
                  className="location-link"
                  to={`/spots?lat=26.0&lng=-80.137314`}
                >
                  <span className="location-ele">
                    <img
                      src="https://a0.muscache.com/im/pictures/aec36912-c412-49db-aef4-01bf9d42d2d4.jpg?aki_policy=large"
                      alt="Fort Lauderdale $195/night avg."
                    />
                    <span className="location-text">
                      Fort Lauderdale
                      <br />
                      <p>
                        <b>$195</b>/night avg.
                      </p>
                    </span>
                  </span>
                </Link>
              </div>

              <div className="location-container box-3">
                <Link
                  className="location-link"
                  to={`/spots?lat=30.266666&lng=-97.733330`}
                >
                  <span className="location-ele">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="Austin $116/night avg."
                    />
                    <span className="location-text box-4">
                      Austin
                      <br />
                      <p>
                        <b>$116</b>/night avg.
                      </p>
                    </span>
                  </span>
                </Link>
              </div>

              <div className="location-container box-5">
                <Link
                  className="location-link"
                  to={`/spots?lat=37.773972&lng=-122.431297`}
                >
                  <span className="location-ele">
                    <img
                      src="https://i.redd.it/xclduo3xccq11.png"
                      alt="San Fransico $145/night avg."
                    />
                    <span className="location-text">
                      San Fransico
                      <br />
                      <p>
                        <b>$145</b>/night avg.
                      </p>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        );
    }
}













export default Home;