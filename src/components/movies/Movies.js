import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { random } from 'lodash';
import movieData from '../../api/movieData';
import MoviePanel from './MoviePanel';
import * as constants from '../../common/constants';

class Movies extends React.Component {
    constructor(props) {
        super(props);

        /* eslint-disable no-console */
        console.log(movieData.length + ' movies in list');
        /* eslint-enable no-console */

        this.movieCount = constants.MOVIE_LIST_LENGTH;
        this.panels = constants.MOVIE_PANELS;

        this.state = {
            error: null,
            movieDetailsArray: [],
            movieScores: [],
        };

        this.initialState = this.state;
        this.reloadChoices = this.reloadChoices.bind(this);
        this.compareMovieScores = this.compareMovieScores.bind(this);
    }

    componentDidMount() {
        for (let i = 0; i < 2; i++) {
            this.getMovieDetails();
        }
    }

    reloadChoices() {
        this.setState(this.initialState);
        for (let i = 0; i < 2; i++) {
            this.getMovieDetails();
        }
    }

    getMovieName() {
        let num = random(0, this.movieCount);
        return movieData[num];
    }

    compareMovieScores(e) {
        let selectionScore = e.target.dataset.score;
        let challengeScore;
        let movieScores = this.state.movieScores;

        movieScores.map(score => {
            if (selectionScore !== score) {
                challengeScore = score;
            }
        });

        selectionScore = parseInt(selectionScore);
        challengeScore = parseInt(challengeScore);

        if (challengeScore < selectionScore) {
            this.handleSelection(1);
        } else if (challengeScore === selectionScore) {
            this.handleSelection(0);
        } else {
            this.handleSelection(-1);
        }
    }

    handleSelection(point) {
        this.props.onSelection(point);
    }

    getMovieDetails() {
        fetch('//www.omdbapi.com/?apikey=88165bfc&t=' + this.getMovieName())
            .then(r => r.json())
            .then(
                result => {
                    if (result.Ratings[1] !== undefined) {
                        let movieScore = result.Ratings[1].Value.slice(0, -1);
                        this.setState(prevState => {
                            return {
                                movieDetailsArray: [
                                    ...prevState.movieDetailsArray,
                                    result,
                                ],
                                movieScores: [
                                    ...prevState.movieScores,
                                    movieScore,
                                ],
                            };
                        });
                    } else {
                        return;
                    }
                },
                error => {
                    this.setState({ error });
                }
            );
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.reloadChoices}>
                    Load new titles
                </button>
                {this.state.movieDetailsArray.map(movie => {
                    if (this.state.movieDetailsArray.length) {
                        return (
                            <MoviePanel
                                key={movie.imdbID}
                                movie={movie}
                                compareMovieScores={this.compareMovieScores}
                            />
                        );
                    }
                })}
            </div>
        );
    }
}

Movies.propTypes = {
    onSelection: PropTypes.func.isRequired,
};

export default Movies;
