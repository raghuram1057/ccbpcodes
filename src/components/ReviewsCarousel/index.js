// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onLeftArrow = () => {
    const {index} = this.state
    this.setState(prevState => ({index: prevState.index - 1}))
    if (index === 0) {
      this.setState({index: 3})
    }
  }

  onRightArrow = () => {
    const {index} = this.state
    this.setState(prevState => ({index: prevState.index + 1}))
    if (index === 3) {
      this.setState({index: 0})
    }
  }

  render() {
    const {index} = this.state
    console.log(index)

    const {reviewsList} = this.props
    console.log(reviewsList[index])
    const initialReviewList = reviewsList[index]
    const {imgUrl, username, companyName, description} = initialReviewList
    return (
      <div className="reviews-bg-container">
        <h1 className="reviews-heading">Reviews</h1>
        <div className="reviews-container">
          <button
            type="button"
            data-testid="leftArrow"
            className="arrow-button"
            onClick={this.onLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review-item">
            <img src={imgUrl} alt={username} className="review-user-image" />
            <p className="review-username">{username}</p>
            <p className="user-companyname">{companyName}</p>
            <p>{description}</p>
          </div>
          <button
            type="button"
            className="arrow-button"
            data-testid="rightArrow"
            onClick={this.onRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
