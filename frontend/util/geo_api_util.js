

export const fetchAddress = (latLng) => {
    return new Promise((resolve) => {
    const geocoder = new google.maps.Geocoder();
      geocoder.geocode({
        location: latLng
    }, (results, status) => {
        if (status === "OK") {
            if (results[0]) {
                return results[1]
            } else {
                window.alert("No results found");
            }
        } else {
            window.alert("Geocoder failed due to: " + status);
        }
    })
  })
}



