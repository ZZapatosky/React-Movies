import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Title extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { movie: {} }

    _fetchMovie({ id }) {
        fetch(`https://imdb-api.com/en/API/Title/k_iqbbu426/` + id)
            .then(res => res.json())
            .then(movie => {
                this.setState({ movie })
            })
    }

    _goBack() {
        window.history.back()
    }

    componentDidMount() {
        const { id } = this.props.match.params
        this._fetchMovie({ id })
    }

    render() {
        const { title, image, awards, plot, stars, imDbRating } = this.state.movie
        return (
            <div>

                <img style={{ width: '13%' }} src={image} />
                <h1>Title: {title} </h1>
                <h3>Stars: {stars} </h3>
                <h3>Awards: {awards} </h3>
                <h3>ImDbRating: {imDbRating} </h3>
                <p>Plot: {plot}</p>
                <button onClick={this._goBack}>Back</button>

            </div>

        )
    }
}