// Code MovieReviews Here

import React from 'react';

const MovieReviews = ({ reviews }) => (
    <div className="review-list">
        <ul>
            {reviews.map(review => 
            <div className="review">
                <li>
                    <h3>{review.headline}</h3>
                    <h4>By: {review.byline}</h4>
                    <img src={review.multimedia.src} alt="" />
                    <p>{review.summary_short}</p>
                </li>
            </div>
            )}
        </ul>
    </div>
)

export default MovieReviews;