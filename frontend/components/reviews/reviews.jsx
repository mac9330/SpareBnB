import React from "react"

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: this.props.currentUser,
      spot_id: this.props.spotId,
      rating: 0,
      description: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state);
    review.rating = parseInt(review.rating);
    review.spot_id = parseInt(review.spot_id);
    review.user_id = parseInt(review.user_id)
    this.props.postReview(review);
  }

  render() {
    const reviews = this.props.reviews ? this.props.reviews : {};
    const users = this.props.users ? this.props.users : {};
    return (
      <div>
        <ul>
          {Object.values(reviews).map((review, idx) => {
            return <li key={idx}>
              <p>{users[review?.user_id]?.fname}</p>
              <p>{review?.rating}</p>
              <p>{review?.description}</p>
            </li>;
          })}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <label>
            Rating
            <select onChange={this.update("rating")} value={this.state.rating} name="rating">
              <option disabled value="">Please Select an Option</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option defaultValue value="5">5</option>
            </select>
          </label>
          <br />
          <label>
            Description
            <textarea
              value={this.state.description}
              onChange={this.update("description")}
            ></textarea>
          </label>
          <br />
          <input type="submit" value="Submit Review" />
        </form>
      </div>
    );
  }
}

export default Reviews;
