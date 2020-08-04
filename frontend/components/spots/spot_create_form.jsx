import React from "react"


class SpotCreateForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
                name: "",
                price: 0,
                latitude: 0.0,
                longitude: 0.0,
                max_occupancy: 0,
                description: "",
                num_beds: 0,
                num_bedrooms: 0,
                num_bathrooms: 0,
                user_id: this.props.currentUser.id
        }

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault 
        this.props.postSpot(this.state).then(action => {
            return this.props.history.push(`/spots/${action.spot.id}`)
        })
    }

    update(form) {
        return e => this.setState({[form]: e.currentTarget.value})
    }

    render() {
        const { name, description, price,  max_occupancy,  num_beds, num_bedrooms, num_bathrooms, latitude, longitude} = this.state;
        return(
          <form onSubmit={this.handleSubmit}>
            <label>Name
                <input type="text" value={name} onChange={this.update("name")}/>
            </label>

            <label>Description
                <input type="text" value={description} onChange={this.update("description")}/>
            </label>

            <label>Number of Bedrooms
                <input type="number" value={price} onChange={this.update("price")} />
            </label>

            <label>Number of Bedrooms
                <input type="number" value={max_occupancy} onChange={this.update("max_occupancy")}/>
            </label>


            <label>Number of Bedrooms
                <input type="number" value={num_bedrooms} onChange={this.update("num_bedrooms")}/>
            </label>

            <label>Number of Beds
                <input type="number" value={num_beds} onChange={this.update("num_beds")}/>
            </label>

            <label>Number of Bathrooms
                <input type="number" value={num_bathrooms} onChange={this.update("num_bathrooms")}/>
            </label>

            <label>Latitude
                <input type="number" disabled value={latitude} onChange={this.update("longitude")} />
            </label>

            <label>Longitude
                <input type="number" disabled value={longitude} onChange={this.update("longitude")}/>
            </label>
            <br/>
                <input type="submit" value="List Location" />
          </form>
        )
    }
}

export default SpotCreateForm;