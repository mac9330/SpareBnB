import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons"

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: this.props.currentUser,
      spot_id: this.props.spotId,
      rating: "You must select a Rating",
      description: "",
      reviews: Object.values(this.props.reviews),
      readMore: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
    this.readMore = this.readMore.bind(this)
    this.description = this.description.bind(this)
  }

  componentDidUpdate() {
    if (this.props.spot && this.state.reviews.length === 0) {
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

  description() {
    if (this.state.readMore) {
      return this.props?.spot?.description
    } else {
      return this.props?.spot?.description.slice(0, 400)
    }
  }

  readMore() {
    this.setState({readMore: true})
  }

  renderForm() {
    if (this.props.currentUser) {
    return (
      <form className="rating-form" onSubmit={this.handleSubmit}>
        <label>
          <p className="rating-label">Rating</p>
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
          <br/>
          <textarea
            value={this.state.description}
            onChange={this.update("description")}
          ></textarea>
        </label>
        <br />
        <input type="submit" value="Submit Review" />
      </form>
    );
    } else {
      return <p>Please Sign In to Submit a Review</p>
    }
  }

  getDate(date) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dateObj = new Date(date);
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();
    return monthNames[month].concat(` ${year}`) 
  }

  render() {
    const reviews = this.state.reviews ? this.state.reviews : {};
    const users = this.props.users ? this.props.users : {};
    const owner = this.props.users ? this.props.users[this.props.spot?.user_id] : null;
    const averageRating = this.props?.spot?.average_rating.slice(0, 4)
    debugger
    return (
      <div className="spot-description">
        <hr className="hr-fix" />
        <p>
          {owner?.fname} {owner?.lname} owns this property
        </p>
        <hr className="hr-fix" />
        <p className="">{this.description()}</p>
        {this.props?.spot?.description.length > 400 && !this.state.readMore ? (
          <>
            {" "}
            <span className="dots">...</span>
            <a onClick={this.readMore}>read more</a>{" "}
          </>
        ) : null}
        <div>
          <hr className="hr-fix" />
          <h2 className="average-rating">
            <FontAwesomeIcon className="fa-star" icon={faStar} />{" "}
            {averageRating} ({reviews?.length} reviews)
          </h2>
          <hr className="hr-fix" />
          <ul>
            {reviews.map((review, idx) => {
              return review.description ? (
                <li key={idx}>
                  <p className="review-name">
                    {users[review?.user_id]?.fname}{" "}
                    {users[review?.user_id]?.lname}
                  </p>
                  <p className="review-date">
                    {this.getDate(review.created_at)}
                  </p>
                  <p className="review-description">{review?.description}</p>
                  <hr className="hr-fix" />
                </li>
              ) : null;
            })}
          </ul>

          {this.renderForm()}
        </div>
      </div>
    );
  }
}

export default Reviews;
