import React from 'react';
import ReactDOM from 'react-dom';
import Movies from './movies/Movies';
import Player from './player/Player';
import Answer from './Answer';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerScore: 0,
            currentStreak: 0,
            isCorrect: null,
        };

        this.handleScore = this.handleScore.bind(this);
    }

    handleScore(point) {
        let score = this.state.playerScore + point;
        let streak = this.state.currentStreak;
        let correct = false;

        switch (point > 0) {
            case true:
                streak++;
                correct = true;
                break;
            case false:
                streak = 0;
                correct = false;
                break;
            default:
                break;
        }

        this.setState(prevState => {
            return {
                playerScore: score,
                currentStreak: streak,
                isCorrect: correct,
            };
        });
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Rotten Movies</h1>
                    <h2>Pick the less rotten movie</h2>
                </header>
                <Player
                    playerScore={this.state.playerScore}
                    playerStreak={this.state.currentStreak}
                />
                <Answer isCorrect={this.state.isCorrect} />
                <Movies
                    playerScore={this.state.playerScore}
                    onSelection={this.handleScore}
                />
            </div>
        );
    }
}

export default App;
