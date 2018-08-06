import React from 'react';
import ReactDOM from 'react-dom';
import Movies from './movies/Movies';
import Player from './player/Player';
import Answer from './Answer';
import GameOver from './GameOver';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerScore: 0,
            playerStreak: 0,
            playerLives: 3,
            isCorrect: null,
            isGameOver: false,
        };

        this.handleScore = this.handleScore.bind(this);
        this.handleReload = this.handleReload.bind(this);
        this.resetAnswer = this.resetAnswer.bind(this);
        this.handleLives = this.handleLives.bind(this);
    }

    handleScore(point) {
        let score = this.state.playerScore + point;
        let streak = this.state.playerStreak;
        let lives = this.state.playerLives;
        let correct = false;

        document.querySelector('.alert').style.display = 'block';

        switch (point > 0) {
            case true:
                streak++;
                correct = true;
                break;
            case false:
                lives = this.handleLives();
                streak = 0;
                correct = false;
                break;
            default:
                break;
        }

        // no negative scores
        score > 0 ? score : (score = 0);

        this.setState(prevState => {
            return {
                playerScore: score,
                playerStreak: streak,
                playerLives: lives,
                isCorrect: correct,
            };
        });

        if (lives > 0) {
            window.setTimeout(this.handleReload, 3000);
        } else {
            window.setTimeout(this.resetAnswer, 3000);
        }

    }

    handleReload() {
        this._child.reloadChoices();
    }

    resetAnswer() {
        document.querySelector('.alert').style.display = 'none';
        this.setState(prevState => {
            return {
                isCorrect: null,
            };
        });
    }

    handleLives() {
        let lives = this.state.playerLives;
        let hearts = document.querySelector('.lives ul');

        if (lives > 0) {
            hearts.removeChild(hearts.childNodes[0]);
            lives--;
        }

        if (lives === 0) {
            this.displayGameOverMsg();
        }
        
        console.log('ALIOVE: ' + this.state.playerLives);
        
        return lives;
    }

    displayGameOverMsg() {
        document.querySelector('.alert').style.display = 'block';
        this.setState(prevState => {
            return {
                isGameOver: true,
            }
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
                        onReload={this.handleReload}
                    />
                </header>
                <div className="alert">
                    <Answer isCorrect={this.state.isCorrect} />
                    <GameOver isGameOver={this.state.isGameOver} />
                </div>
                <Movies
                    onSelection={this.handleScore}
                    resetAnswer={this.resetAnswer}
                    ref={child => (this._child = child)}
                    isGameOver={this.state.isGameOver}
                />
            </div>
        );
    }
}

export default App;