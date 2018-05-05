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
        this.resetScore = this.resetScore.bind(this);
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
        this._child.reloadChoices();
        this.resetScore();
    }

    resetScore() {
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
                    <aside>
                        <h1>Rotten Movies</h1>
                        <h2>Pick the least rotten movie</h2>
                        <div>
                            <button
                                type="button"
                                onClick={this.handleReload}
                                className="reloadMovies"
                            >
                                Reload
                            </button>
                            <span>(will cost a life)</span>
                        </div>
                    </aside>
                    <Player
                        playerScore={this.state.playerScore}
                        playerStreak={this.state.currentStreak}
                        onReload={this.handleReload}
                        resetScore={this.resetScore}
                    />
                </header>
                <div className="answer">
                    <Answer isCorrect={this.state.isCorrect} />
                </div>
                <Movies
                    onSelection={this.handleScore}
                    resetScore={this.resetScore}
                    ref={child => (this._child = child)}
                />
            </div>
        );
    }
}

export default App;
