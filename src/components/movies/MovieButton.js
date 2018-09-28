import React from 'react';
import PropTypes from 'prop-types';

class MovieButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button
                    className="waves-effect waves-light btn-large"
                    onClick={this.props.compareMovieScores}
                    data-score={this.props.score}
                >
                    Select
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
