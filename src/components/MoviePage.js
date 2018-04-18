import React from 'react';
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import {random} from 'lodash';
import movieData from '../api/movieData';
import MoviePanel from '../components/MoviePanel';

class MoviePage extends React.Component {
    constructor(props) {
        super(props);
        this.movieCount = 170;
        this.panels = 2;

        this.state = {
            error: null,
            movieDetailsArray: []
         };

         this.initialState = this.state;
         this.reloadChoices = this.reloadChoices.bind(this);
    }

    componentDidMount() {
        for(let i = 0; i < 2; i++){
            this.getMovieDetails();
        }
    }

    reloadChoices() {
        this.setState(this.initialState);
        for (let i = 0; i < 2; i++) {
          this.getMovieDetails();
        }
    }

    selectMovie(e) {
        console.log(e.target.dataset.score);
    }

    getMovieName() {
        let num = random(0, this.movieCount);
        return movieData[num]; 
    }

    getMovieDetails() {
        fetch("//www.omdbapi.com/?apikey=88165bfc&t=" + this.getMovieName())
            .then(r => r.json())
            .then(
                result => {
                    console.log(result);
                    this.setState((prevState) => {
                        return {
                            movieDetailsArray: [...prevState.movieDetailsArray, result]
                        };
                    });
                }, 
                error => {
                    this.setState({ error });
                });
    }

    render() {        
        return (
            <div>
                {
                    this.state.movieDetailsArray.map(movie => {
                       if(this.state.movieDetailsArray.length) {
                            return <MoviePanel key={movie.imdbID} 
                                movie={movie} 
                                selectMovie={this.selectMovie} />;
                       } 
                    })
                }
                <button type="button" onClick={this.reloadChoices}>
                    Load new titles
                </button>
            </div>
        );
    }
}

export default MoviePage;