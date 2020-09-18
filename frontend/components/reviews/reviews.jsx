import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons"
import Reservation from "../reservations/reservation"

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spot_id: this.props.spotId,
      user_id: this.props.currentUser?.id,
      rating: "You must select a Rating",
      description: "",
      reviews: Object.values(this.props.reviews),
      readMore: false,
    };
    this.props.clearReviewErrors();
    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
    this.readMore = this.readMore.bind(this)
    this.description = this.description.bind(this)
  }


  componentDidUpdate() {
    if (this.props.spot && this.state.reviews.length === 0 && Object.values(this.props.reviews).length  !== 0) {
      this.setState({reviews: Object.values(this.props.reviews)});
    }
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.currentUser === undefined) {
      this.props.openModal("Login");
    } else {
      const review = Object.assign({}, this.state);
      review.rating = parseInt(review.rating);
      review.spot_id = parseInt(review.spot_id);
      review.user_id = parseInt(review.user_id);
      this.props.postReview(review);
      let alreadyReviewed = false;
      Object.values(this.props.reviews).forEach(el => {
        if (el.user_id === review.user_id) alreadyReviewed = true;
      })
      if (!alreadyReviewed && typeof review.rating ===  "number")
        this.setState({ reviews: this.state.reviews?.concat(review) });
        this.props.clearReviewErrors();
    }
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
    return (
      <form className="rating-form" onSubmit={this.handleSubmit}>
        <ul className="errors-list">
        {this.props.errors?.review?.map((err, i) => {
          return (
            <li key={i}>
              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>{" "}
              {err}
            </li>
          );
        })}
        </ul>
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
    return date ? monthNames[month]?.concat(` ${year}`) : "Just Now"
  }

  reviews() {
    let reviews;
    if (this.props.errors?.reviews?.length === 0) {
      reviews = this.props?.reviews
    } else {
      reviews = this.state.reviews
    }
    return <div>{
      reviews?.map((review, idx) => {
        return review.description ? (
          <li key={idx}>
            <p className="review-name">
              {this.props.users[review?.user_id]?.fname}{" "}
              {this.props.users[review?.user_id]?.lname}
            </p>
            <p className="review-date">
              {this.getDate(review.created_at)}
            </p>
            <p className="review-description">
              {review?.description}
            </p>
            <hr className="hr-fix" />
          </li>
        ) : null;
      })
    } </div>

  }

  render() {
    const reviews = this.state.reviews ? this.state.reviews : {};
    const users = this.props.users ? this.props.users : {};
    const owner = this.props.users ? this.props.users[this.props.spot?.user_id] : null;
    const averageRating = this.props?.spot?.average_rating?.slice(0, 4)
    return (
      <div className="flex-col">
        <div className="spot-description">
          <hr className="hr-fix" />
          <p className="owner-name">
            {owner?.fname} {owner?.lname} owns this property
          </p>
          <hr className="hr-fix" />
          <p className="">{this.description()}</p>
          {this.props?.spot?.description.length > 400 &&
          !this.state.readMore ? (
            <>
              {" "}
              <span className="dots">
                ... <a onClick={this.readMore}>read more</a>{" "}
              </span>
            </>
          ) : null}
          <div>
            <hr className="hr-fix" />
            <h2 className="average-rating">
              <FontAwesomeIcon className="fa-star" icon={faStar} />{" "}
              {averageRating} ({reviews?.length} reviews)
            </h2>
            <hr className="hr-fix" />
            <ul>{this.reviews()}</ul>

            {this.renderForm()}
          </div>
        </div>
        <div>
          <Reservation
            postReservation={this.props.postReservation}
            spotId={this.props.spotId}
            currentUser={this.props.currentUser}
            openModal={this.props.openModal}
            errors={this.props.errors}
            clearReservationErrors={this.props.clearReservationErrors}
            history={this.props.history}
          />
        </div>
      </div>
    );
  }
}

export default Reviews;
