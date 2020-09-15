export const postReservation = (reservation) => {
    return $.ajax({
        method: "POST",
        url: "/api/reservations",
        data: {reservation}
    })
}

export const fetchReservations = () => {
    return $.ajax({
        method: "GET",
        url: "/api/reservations"
    })
}
