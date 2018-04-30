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

        this.reloadChoices = this.reloadChoices.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ name: e.target.value });
    }

    reloadChoices() {
        this.props.onReload();
    }

    render() {
        return (
            <aside>
                <PlayerCard
                    name={this.state.name}
                    playerScore={this.props.playerScore}
                    playerStreak={this.props.playerStreak}
                />
                <div>
                    <button
                        type="button"
                        onClick={this.reloadChoices}
                        className="reloadMovies"
                    >
                        Reload
                    </button>
                    <span>(will cost a life)</span>
                </div>
            </aside>
        );
    }
}

Player.propTypes = {
    playerScore: PropTypes.number.isRequired,
    playerStreak: PropTypes.number.isRequired,
    onReload: PropTypes.func.isRequired,
};

export default Player;
