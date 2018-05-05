import React from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import MoviePanel from './MoviePanel';

class MovieButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button
                    className="btn movie-btn"
                    onClick={this.props.compareMovieScores}
                    data-score={this.props.score}
                >
                    SELECT
                </button>
            </div>
        );
    }
}

MovieButton.propTypes = {
    compareMovieScores: PropTypes.func.isRequired,
    score: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default MovieButton;
