import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const PlayerCard = ({ name, playerScore, playerStreak, playerLives }) => {
    return (
        <div className="player-card">
            <div>
                <small>Player 1</small>
                <h3>AKB</h3>
            </div>
            <div>
                <small>Lives</small>
                <h3>{playerLives}</h3>
            </div>
            <div className="stats">
                <small>Score</small>
                <h3>{playerScore}</h3>
            </div>
            <div className="stats">
                <small>Streak</small>
                <h3>{playerStreak}</h3>
            </div>
        </div>
    );
};

PlayerCard.propTypes = {
    name: PropTypes.string,
    playerScore: PropTypes.number.isRequired,
    playerStreak: PropTypes.number.isRequired,
    playerLives: PropTypes.number.isRequired,
};

export default PlayerCard;
