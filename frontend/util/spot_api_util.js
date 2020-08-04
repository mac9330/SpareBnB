export const fetchSpots = (bounds) => {
    return $.ajax({
        method: "GET",
        url: `/api/spots`,
        data: bounds
    })
}

export const fetchSpot = (spotId) => (
    $.ajax({
        method: "GET",
        url: `/api/spots/${spotId}`
    })
)

export const postSpot = (spot) => (
    $.ajax({
        method: "POST", 
        url: "/api/spots",
        data: {spot}
    })
)

export const findSpot = (spot) => (
    $.ajax({
        method: "GET",
        url: "/api/spots",
        data: {spot}
    })
)