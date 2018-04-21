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
        this.handleReload = this.handleReload.bind(this);
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

        score > 0 ? score : (score = 0);

        this.setState(prevState => {
            return {
                playerScore: score,
                currentStreak: streak,
                isCorrect: correct,
            };
        });
    }

    handleReload() {
        this.setState(prevState => {
            return {
                isCorrect: null,
            };
        });
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Rotten Movies</h1>
                    <h2>Pick the less rotten movie</h2>
                    <Player
                        playerScore={this.state.playerScore}
                        playerStreak={this.state.currentStreak}
                    />
                </header>
                <Answer isCorrect={this.state.isCorrect} />
                <Movies
                    playerScore={this.state.playerScore}
                    onSelection={this.handleScore}
                    onReload={this.handleReload}
                />
            </div>
        );
    }
}

export default App;
