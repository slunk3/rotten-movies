import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const PlayerCard = ({ name, playerScore, playerStreak }) => {
    return (
        <div>
            <div>
                <h2>{name}</h2>
            </div>
            <div>
                Score: <span>{playerScore}</span>
            </div>
            <div>
                Streak: <span>{playerStreak}</span>
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
