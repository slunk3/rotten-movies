import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const GameOver = result => {
    let isGameOver = result.isGameOver;

    if (isGameOver === true) {
        return (
            <div className="game-over center">
                <h3>Game over, man!</h3>
                <a href="#" id="replay">
                    Play again?
                </a>
            </div>
        );
    } else {
        return null;
    }
};

export default GameOver;
