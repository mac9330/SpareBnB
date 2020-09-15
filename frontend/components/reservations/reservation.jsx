import React from "react";

class Reservation extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
          check_in: Date.now(),
          check_out: Date.now(),
          num_guests: 0,
        };
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const reservation = Object.assign({}, this.state);
        reservation.spot_id = this.props.spotId
        this.props.postReservation(reservation);
    }

    render() {
        return(
            <form className="bookings" onSubmit={this.handleSubmit}>
                <div className="date-labels">
                    <label>Start Date</label>
                    <label>End Date</label>
                </div>
                <div className="date-labels">
                    <input type="date" value={this.state.check_in} onChange={this.update('check_in')}/>
                    <input type="date" value={this.state.check_out} onChange={this.update('check_out')}/>
                </div>
                <div className="num-guests">
                    <label>
                        <input type="number" value={this.state.num_guests} onChange={this.update('num_guests')} />
                    Number Of Guests</label>
                    <br/>
                    <input type="submit" value="Make a Reservation" />
                </div>
            </form>
        )
    }
}

export default Reservation