import React from "react";

import {
  DateRangePicker,
} from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";

class Reservation extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          check_in: moment(),
          check_out: moment(),
          num_guests: 0,
          focusedInput: null,
        };
        this.props.clearReservationErrors();
        this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
         if (this.props.currentUser === undefined) {
           this.props.openModal("Login");
         } else {
            const reservation = Object.assign({}, this.state);
            reservation.spot_id = this.props.spotId
            reservation.check_in = this.state.check_in.toString();
            reservation.check_out = this.state.check_out.toString();
            this.props.postReservation(reservation);
            this.props.clearReservationErrors();
         }
    }

    render() {
        return (
            <form className="bookings" onSubmit={this.handleSubmit}>
              <ul className="errors-list">
                {this.props.errors?.reservation?.map((err, i) => {
                  return (
                    <li key={i}>
                      <i
                        className="fa fa-exclamation-circle"
                        aria-hidden="true"
                      ></i>{" "}
                      {err}
                    </li>
                  );
                })}
              </ul>
                <DateRangePicker
                  startDate={this.state.check_in} // momentPropTypes.momentObj or null,
                  startDateId="start_date" // PropTypes.string.isRequired,
                  endDate={this.state.check_out} // momentPropTypes.momentObj or null,
                  endDateId="end_date" // PropTypes.string.isRequired,
                  onDatesChange={({ startDate, endDate }) =>
                    this.setState({ check_in: startDate, check_out: endDate })
                  } // PropTypes.func.isRequired,
                  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                  onFocusChange={(focusedInput) =>
                    this.setState({ focusedInput })
                  } // PropTypes.func.isRequired,
                />
              <div className="num-guests">
                <label>
                  <input
                    type="number"
                    value={this.state.num_guests}
                    onChange={this.update("num_guests")}
                  />
                  Number Of Guests
                </label>
                <br />
                <input id="reservation-btn" type="submit" value="Make a Reservation" />
              </div>
            </form>
        );
    }
}

export default Reservation