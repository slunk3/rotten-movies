import React from 'react';
import PropTypes from 'prop-types';
import PlayerCard from './PlayerCard';

class Player extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="player-stats">
                <PlayerCard
                    playerName={this.props.playerName}
                    playerScore={this.props.playerScore}
                    playerStreak={this.props.playerStreak}
                    playerLives={this.props.playerLives}
                />
            </section>
        );
    }
}

Player.propTypes = {
    playerName: PropTypes.string,
    playerScore: PropTypes.number.isRequired,
    playerStreak: PropTypes.number.isRequired,
    playerLives: PropTypes.number.isRequired,
    onReload: PropTypes.func.isRequired,
};

export default Player;
