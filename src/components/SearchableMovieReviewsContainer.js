import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'l3zWnSRgp9RCtedrUnFRXB6NlBi7PdTm';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super();
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleSubmit(searchTerm) {
        fetch(URL+`&query=${searchTerm}`)
        .then(resp => resp.json())
        .then(reviewData => this.setState({ reviews: reviewData.results}))
    }

    shouldComponentUpdate(nextProps, nextState){
        if (this.state.reviews === nextState.reviews){
            return false
        } 
        return true
    }

    handleChange = (event) => {
        this.setState(
            {
                ...this.state.reviews,
                searchTerm: event.target.value
            }
        )
    }

    render(){
        return( 
        <div className='searchable-movie-reviews'>
            <form onSubmit={() => this.handleSubmit(this.state.searchTerm)}>
                <label>Search Movie:</label>
                <input type='text' onChange={e => this.handleChange(e)} />
                <button type='submit' value='Submit'>Submit</button>
                <MovieReviews reviews={this.state.reviews} />
            </form>
        </div>
        )
    }
}