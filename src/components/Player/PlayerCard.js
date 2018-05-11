import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const PlayerCard = ({ name, playerScore, playerStreak }) => {
    return (
        <div className="player-card">
            <div>
                <small>Player 1</small>
                <h3>AKB</h3>
            </div>
            <div className="lives">
                <small>Lives</small>
                <ul>
                    <li>
                        <img src="./src/images/8bit-heart.png" />
                    </li>
                    <li>
                        <img src="./src/images/8bit-heart.png" />
                    </li>
                    <li>
                        <img src="./src/images/8bit-heart.png" />
                    </li>
                </ul>
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
};

export default PlayerCard;
