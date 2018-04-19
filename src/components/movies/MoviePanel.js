import React from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import Button from './MovieButton';

const wrapperClass = "movie";

class MoviePanel extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className={wrapperClass}>
                <h2>{this.props.movie.Title}</h2>
                <div>
                    {this.props.movie.Poster !== "N/A" &&
                     (<img src={this.props.movie.Poster} />)}
                    <Button value={this.props.movie.Title}
                        compareMovieScores={this.props.compareMovieScores} />
                </div>
            </div>;
    }
}

MoviePanel.propTypes = {
  movie: PropTypes.object.isRequired,
  compareMovieScores: PropTypes.func.isRequired
};

export default MoviePanel;