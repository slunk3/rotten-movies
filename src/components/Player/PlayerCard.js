import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const PlayerCard = ({ name, playerScore, playerStreak }) => {
    return (
        <div className="playerCard">
            <div>
                <h3>AKB</h3>
            </div>
            <div className="stats">
                Score
                <h4>{playerScore}</h4>
            </div>
            <div className="stats">
                Streak
                <h4>{playerStreak}</h4>
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
