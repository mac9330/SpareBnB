# SpareBnB: An AirBnB Clone
SpareBnB is a completely functional clone of the vacation rental site AirBnB. You can create an account, search and view locations to rent, book vactiontions, leave reviews, or host your own rental property.

# Technologies
This site is built with Ruby on rails and PostgreSQL on the backend and JavaScript, React and Redux on the Frontend, as well as Webpack for bundling. The Styling for this site was done is SCSS, Heroku was used for deployment, and all images are stored through AWS.

# Features 

## Spot Search with Google Maps API and Google Places autocomplete API.

From the search page users can search for locations worldwide and visualize all locations currently in bounds (currently visible on the map), and click on the single page link for a more in-depth descritpion of a location that catches their eye.

All images are hosted through Amazon Web Services. Allowing scalability of the Application, and faster loading for images overall by leveraging Amazon's servers.

## Spot Reservations
On the spot's show page, a logged in user can access a reservation form, which requires a check in date, check out date, and number of guests. If the date is available the user will have successfully completed the reservation process, and can view their reserved trips in the reservations index.

## Spot Reviews
On the spot's show page, a user can view an index of a spot's reviews and the an average overall review rating for said spot, and a logged in user can leave a spot review.

## User Auth
A user has the ability to sign up or sign through the greetings modal. The Modal also renders errors with pixel perfect style. 

