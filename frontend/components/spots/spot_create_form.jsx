import React from "react"
import PlacesAutoComplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";


class SpotCreateForm extends React.Component {
  constructor(props) {
    super(props);

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
      user_id: this.props.currentUser.id,
      address: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault;
    this.props.postSpot(this.state).then((action) => {
      return this.props.history.push(`/spots/${action.spot.id}`);
    });
  }

  update(form) {
    return (e) =>
      this.setState({
        [form]: e.target.value,
      });
  }

  handleChange(address) {
    this.setState({ address });
  }

  handleSelect(address) {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((res) =>
        this.setState({
          latitude: res.lat,
          longitude: res.lng,
        })
      );
  }

  render() {
    const {
      name,
      description,
      price,
      max_occupancy,
      num_beds,
      num_bedrooms,
      num_bathrooms,
      address,
      latitude,
      longitude,
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input type="text" value={name} onChange={this.update("name")} />
        </label>

        <label>
          Description
          <input
            type="text"
            value={description}
            onChange={this.update("description")}
          />
        </label>

        <label>
          Number of Bedrooms
          <input type="number" value={price} onChange={this.update("price")} />
        </label>

        <label>
          Number of Bedrooms
          <input
            type="number"
            value={max_occupancy}
            onChange={this.update("max_occupancy")}
          />
        </label>

        <label>
          Number of Bedrooms
          <input
            type="number"
            value={num_bedrooms}
            onChange={this.update("num_bedrooms")}
          />
        </label>

        <label>
          Number of Beds
          <input
            type="number"
            value={num_beds}
            onChange={this.update("num_beds")}
          />
        </label>

        <label>
          Number of Bathrooms
          <input
            type="number"
            value={num_bathrooms}
            onChange={this.update("num_bathrooms")}
          />
        </label>

        <label>
          Address
          <PlacesAutoComplete
            value={address}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                <input {...getInputProps({ placeholder: "Enter Address" })} />

                <div>
                  {loading ? <div>...loading</div> : null}
                  <ul>
                    {suggestions.map((suggestion, i) => {
                      const style = {
                        backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                      };

                      return (
                        <li
                          {...getSuggestionItemProps(suggestion, { style })}
                          key={i}
                        >
                          {suggestion.description}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            )}
          </PlacesAutoComplete>
        </label>
        <br />
        <input type="submit" value="List Location" />
      </form>
    );
  }
}

export default SpotCreateForm;