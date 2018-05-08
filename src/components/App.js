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
            playerStreak: 0,
            playerLives: 3,
            isCorrect: null,
        };

        this.handleScore = this.handleScore.bind(this);
        this.handleReload = this.handleReload.bind(this);
        this.resetScore = this.resetScore.bind(this);
    }

    handleScore(point) {
        let score = this.state.playerScore + point;
        let streak = this.state.playerStreak;
        let lives = this.state.playerLives;
        let correct = false;

        switch (point > 0) {
            case true:
                streak++;
                correct = true;
                break;
            case false:
                streak = 0;
                lives--;
                correct = false;
                break;
            default:
                break;
        }

        score > 0 ? score : (score = 0);

        this.setState(prevState => {
            return {
                playerScore: score,
                playerStreak: streak,
                playerLives: lives,
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
                    </aside>
                    <section>
                        <button
                            type="button"
                            onClick={this.handleReload}
                            className="reload-movies"
                        >
                            Reload
                        </button>
                        <span>(will cost a life)</span>
                    </section>
                    <Player
                        playerScore={this.state.playerScore}
                        playerStreak={this.state.playerStreak}
                        playerLives={this.state.playerLives}
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
