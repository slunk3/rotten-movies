import React from 'react';
import ReactDOM from "react-dom";
import Movies from "./movies/Movies";
import Player from './Player/Player';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            playerScore: 0,
            currentStreak: 0
        };

        this.handleScore = this.handleScore.bind(this);
    }

    handleScore(point) {
        let score = this.state.playerScore + point;
        console.log(score);
        this.setState((prevState) => {
            return { playerScore: score };
        });
    }

    render() {        
        return <div>
            <Player playerScore={this.state.playerScore} />
            <Movies playerScore={this.state.playerScore} onSelection={this.handleScore} />
          </div>;
    }
}

export default App;