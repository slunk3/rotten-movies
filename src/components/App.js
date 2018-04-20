import React from "react";
import ReactDOM from "react-dom";
import Movies from "./movies/Movies";
import Player from "./Player/Player";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerScore: 0,
            currentStreak: 0,
        };

        this.handleScore = this.handleScore.bind(this);
    }

    handleScore(point) {
        let score = this.state.playerScore + point;
        let streak = this.state.currentStreak;
        //debugger;
        switch (point > 0) {
            case true:
                streak++;
                break;
            case false:
                streak = 0;
                break;
            default:
                break;
        }
        console.log("streak" + streak);
        this.setState(prevState => {
            return { playerScore: score, currentStreak: streak };
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
                <Movies
                    playerScore={this.state.playerScore}
                    onSelection={this.handleScore}
                />
            </div>
        );
    }
}

export default App;
