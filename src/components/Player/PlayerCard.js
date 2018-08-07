import React from 'react';
import PropTypes from 'prop-types';
import PlayerLives from './PlayerLives';

class PlayerCard extends React.Component {
    render() {
        return (
            <div className="player-card">
                <div>
                    <small>Player 1</small>
                    <h3>AKB</h3>
                </div>
                <div className="lives">
                    <small>Lives:</small>
                    <ul>
                        <PlayerLives playerLives={this.props.playerLives} />
                    </ul>
                </div>
                <div className="stats">
                    <small>Score</small>
                    <h3>{this.props.playerScore}</h3>
                </div>
                <div className="stats">
                    <small>Streak</small>
                    <h3>{this.props.playerStreak}</h3>
                </div>
            </div>
        );
    }
}

PlayerCard.propTypes = {
    name: PropTypes.string,
    playerScore: PropTypes.number.isRequired,
    playerStreak: PropTypes.number.isRequired,
    playerLives: PropTypes.number.isRequired,
};

export default PlayerCard;
