import React, { Component } from 'react'

export default class ReviewSection extends Component {
    render() {
        return (
            <div className="reviews">
                    <h3>Reviews and Ratings</h3>
                    <hr></hr>
                    <div className="customer">
                    <img alt="image of customer"></img>
                    <p><strong>Name of car</strong></p>
                    <p>Rating</p>
                    <p>Name of customer and date</p>
                    <p>Comment</p>
                    </div>
            </div>
        )
    }
}
