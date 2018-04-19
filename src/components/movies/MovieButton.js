import React from "react";
import PropTypes from "prop-types";
import ReactDom from "react-dom";


class MovieButton extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return <div>
            <button className="btn movie-btn" 
                onClick={this.props.compareMovieScores}>
              {this.props.value}
            </button>
          </div>;
    }
}

MovieButton.propTypes = {
    compareMovieScores: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default MovieButton;