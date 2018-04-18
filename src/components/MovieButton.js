import React from "react";
import PropTypes from "prop-types";
import ReactDom from "react-dom";
import MoviePanel from "./MoviePanel";


class MovieButton extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return <div>
            <button className="btn movie-btn" onClick={this.props.selectMovie} data-score={this.props.score}>
              {this.props.value}
            </button>
          </div>;
    }
}

export default MovieButton;