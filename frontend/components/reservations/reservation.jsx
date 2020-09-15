import React from "react";

class Reservation extends React.Component {

    constructor(props) {
        super(props)
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        var yyyy = today.getFullYear();
        this.state = {
          check_in: `${yyyy}-${mm}-${dd}`,
          check_out: `${yyyy}-${mm}-${dd}`,
          num_guests: 0,
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
              <label>Start Date</label>
              <label>End Date</label>
            </div>
            <div className="date-labels">
              <input
                type="date"
                value={this.state.check_in}
                onChange={this.update("check_in")}
              />
              <input
                type="date"
                value={this.state.check_out}
                onChange={this.update("check_out")}
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
        );
    }
}

export default Reservation