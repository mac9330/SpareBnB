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
      img,
    } = this.state;
    return (
      <div className="spot-form-container">
        <div className="background-img">
          {" "}
          <img src="https://images.unsplash.com/photo-1546614409-810f10108b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=1791&q=80" />
        </div>
        <form className="spot-form" onSubmit={this.handleSubmit}>
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
          <div className="grid">
            <div className="grid-1">
              <label>
                Price
                <input
                  type="number"
                  value={price}
                  onChange={this.update("price")}
                />
              </label>
            </div>
            <div className="grid-2">
              <label>
                Number of Guests
                <input
                  type="number"
                  value={max_occupancy}
                  onChange={this.update("max_occupancy")}
                />
              </label>
            </div>
            <div className="grid-3">
              <label>
                Bedrooms
                <input
                  type="number"
                  value={num_bedrooms}
                  onChange={this.update("num_bedrooms")}
                />
              </label>
            </div>
            <div className="grid-4">
              <label>
                Beds
                <input
                  type="number"
                  value={num_beds}
                  onChange={this.update("num_beds")}
                />
              </label>
            </div>
            <div className="grid-5">
              <label>
                Bathrooms
                <input
                  type="number"
                  value={num_bathrooms}
                  onChange={this.update("num_bathrooms")}
                />
              </label>
            </div>
          </div>
          <PlacesAutoComplete
            value={address}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
            className="auto-complete"
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div className="auto-complete">
                <input {...getInputProps({ placeholder: "Enter Address" })} />

                <div>
                  {loading ? <div>...loading</div> : null}
                  <ul>
                    {suggestions.map((suggestion, i) => {
                      const style = {
                        backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                        width: "80%",
                        margin: "0 0 0 7%",
                        padding: "3% 5%"
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
          <br />
          <input type="submit" value="List Location" />
        </form>
      </div>
    );
  }
}

export default SpotCreateForm;


