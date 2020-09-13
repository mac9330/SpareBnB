import React from "react"

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: this.props.currentUser,
      spot_id: this.props.spotId,
      rating: "You must select a Rating",
      description: "",
      reviews: Object.values(this.props.reviews),
      fetchedSpot: false
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
  }

  componentDidUpdate() {
    debugger
    if (this.props.spot && this.state.reviews.length === 0 && this.state.fetchedSpot) {
      this.setState({reviews: Object.values(this.props.reviews)});
    }
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
    this.setState({reviews: this.state.reviews.concat(review)})
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Rating
          <select
            onChange={this.update("rating")}
            value={this.state.rating}
            name="rating"
          >
            <option value="">Please Select an Option</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
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
    );
  }

  render() {
    const reviews = this.state.reviews ? this.state.reviews : {};
    const users = this.props.users ? this.props.users : {};
    return (
      <div>
        <ul>
          {reviews.map((review, idx) => {
            return <li key={idx}>
              <p>{users[review?.user_id]?.fname}</p>
              <p>{review?.rating}</p>
              <p>{review?.description}</p>
            </li>;
          })}
        </ul>

          {this.renderForm()}
      </div>
    );
  }
}

export default Reviews;
