import React from "react";
import {Link} from "react-router-dom"
import reverse from "reverse-geocode";

class ReservationsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReservations(this.props.currentUser);
  }

  getDate(date) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dateObj = new Date(date);
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();
    const day = dateObj.getDate();
    return monthNames[month]?.concat(` ${day + 1},`).concat(` ${year}`)
  }

  bookingsGrid() {
    const reservations = Object.values(this.props?.reservations);
    const spots = this.props?.spots;
    return (
      <ul className="bookings-grid">
        {reservations?.map((reservation, idx) => {
          const spot = spots[reservation.spot_id];

          return (
            <div key={idx} className="booking">
              <Link to={`/spots/${spot.id}`}>
                <img src={`${spot.photoUrls[0]}`} />
              </Link>
              <li>
                <Link to={`/spots/${spot.id}`}>
                  <div className="trip-booked">
                    Click here for more info on your upcoming trip!
                  </div>
                </Link>
                <hr className="hr-fix" />
                <div>
                  From: <span>{this.getDate(reservation.check_in)}</span>
                </div>
                <div>
                  To: <span>{this.getDate(reservation.check_out)}</span>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    );
  }

  render() {
    return(
        <div>
            <h1 className="bookings-h1" >Your Booked Trips</h1>
            {this.bookingsGrid()}
        </div>
    );
  }
}

export default ReservationsIndex;