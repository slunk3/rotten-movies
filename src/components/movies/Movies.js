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

        this.panels = constants.MOVIE_PANELS;
        this.key = constants.OIMDB_KEY;

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
        this.handleAnswer();
    }

    getMovieName() {
        let num = random(0, movieData.length);
        return movieData[num];
    }

    compareMovieScores(e) {
        let selectionScore = e.target.dataset.score;
        let challengeScore;
        let movieScores = this.state.movieScores;
        let tomatoScore = document.querySelectorAll('.tomato-score');

        tomatoScore.forEach(score => {
            score.style.display = 'block';
        });

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

        window.setTimeout(this.reloadChoices, 3000);
    }

    handleSelection(point) {
        this.props.onSelection(point);
    }

    handleAnswer() {
        this.props.resetScore();
    }

    getMovieDetails() {
        fetch(
            '//www.omdbapi.com/?apikey=' +
                this.key +
                '&t=' +
                this.getMovieName()
        )
            .then(r => r.json())
            .then(
                result => {
                    if (
                        result.Response !== 'False' &&
                        result.Ratings[1].Source == 'Rotten Tomatoes'
                    ) {
                        let movieScore = result.Ratings[1].Value.slice(0, -1);
                        let firstMovie = this.state.movieDetailsArray[0] || [];

                        if (
                            firstMovie.length &&
                            firstMovie[0].imdbID === result.imdbID
                        ) {
                            return this.reloadChoices();
                        }
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
                        // debugger;
                        console.log(result);
                        return this.reloadChoices();
                    }
                },
                error => {
                    this.setState({ error });
                }
            );
    }

    render() {
        return (
            <main>
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
            </main>
        );
    }
}

Movies.propTypes = {
    onSelection: PropTypes.func.isRequired,
    resetScore: PropTypes.func.isRequired,
};

export default Movies;
