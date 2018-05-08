import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import PlayerForm from './PlayerForm';
import PlayerCard from './PlayerCard';

class Player extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ name: e.target.value });
    }

    render() {
        return (
            <section className="player-stats">
                <PlayerCard
                    name={this.state.name}
                    playerScore={this.props.playerScore}
                    playerStreak={this.props.playerStreak}
                    playerLives={this.props.playerLives}
                />
            </section>
        );
    }
}

Player.propTypes = {
    playerScore: PropTypes.number.isRequired,
    playerStreak: PropTypes.number.isRequired,
    playerLives: PropTypes.number.isRequired,
    onReload: PropTypes.func.isRequired,
};

export default Player;
