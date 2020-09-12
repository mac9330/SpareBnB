import React from "react";
import PlacesAutoComplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";




class GooglePlacesSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleChange(address) {
    this.setState({ address });
  }

  handleSelect(address) {
    const that = this.props;
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((res) => {
            that.props.history.push("/empty")
            return that.props.history.push(`spots?lat=${res.lat}&lng=${res.lng}`)
      });
  }



  render() {
    const {address} = this.state
    return (
      <PlacesAutoComplete
        value={address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        className="auto-complete"
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="auto-complete">
            <input {...getInputProps({ placeholder: "Search City State or Address" })} />

            <div>
              {loading ? <div>...loading</div> : null}
              <ul>
                {suggestions.map((suggestion, i) => {
                  const style = {
                    backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                    width: "80%",
                    margin: "0 0 0 7%",
                    padding: "3% 5%",
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
    );
  }
}

export default GooglePlacesSearch;