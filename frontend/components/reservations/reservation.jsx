import React from "react";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController,
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
          focusedInput: [this.state.check_in, this.state.check_out]
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
            this.props.postReservation(reservation);
            this.props.clearReservationErrors();
         }
    }

    render() {
        return (
          <div>
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
              <div className="date-labels">
              </div>
              <div className="date-labels">
                <DateRangePicker
                  startDate={this.state.check_in} // momentPropTypes.momentObj or null,
                  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                  endDate={this.state.check_out} // momentPropTypes.momentObj or null,
                  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                  onDatesChange={({ check_in, check_out }) =>
                    this.setState({ check_in, check_out })
                  } // PropTypes.func.isRequired,
                  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                  onFocusChange={(focusedInput) =>
                    this.setState({ focusedInput })
                  } // PropTypes.func.isRequired,
                />
              </div>
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
                <input type="submit" value="Make a Reservation" />
              </div>
            </form>
          </div>
        );
    }
}

export default Reservation