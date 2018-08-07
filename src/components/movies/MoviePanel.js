import React from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import MoviePage from '../App';
import Button from './MovieButton';

class MoviePanel extends React.Component {
    constructor(props) {
        super(props);
    }

    getScore() {
        let ratings = this.props.movie.Ratings;
        if (ratings[1].Source === 'Rotten Tomatoes') {
            let tomatoRating = ratings[1].Value.slice(0, -1);
            return tomatoRating;
        }
    }

    render() {
        let rottenScore = this.getScore();
        let displayMovies = 'block';
        if (this.props.isGameOver) {
            displayMovies = 'block';
        }
        return (
            <section className="movie" style={{ display: displayMovies }}>
                <Button
                    score={rottenScore}
                    value={this.props.movie.Title}
                    compareMovieScores={this.props.compareMovieScores}
                />
                {this.props.movie.Poster !== 'N/A' && (
                    <img src={this.props.movie.Poster} />
                )}
                <div className="movie-details">
                    <h2>{this.props.movie.Title}</h2>
                    <h3 className="hide tomato-score">{rottenScore}%</h3>
                    <small>{this.props.movie.Plot}</small>
                </div>
            </section>
        );
    }
}

MoviePanel.propTypes = {
    movie: PropTypes.object.isRequired,
    compareMovieScores: PropTypes.func.isRequired,
    isGameOver: PropTypes.bool,
};

export default MoviePanel;
