import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class GameOver extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let isGameOver = this.props.isGameOver;

        if (isGameOver === true) {
            return (
                <div className="game-over center">
                    <h3>Game over, man!</h3>
                    <a href="#" onClick={this.props.handleReload} id="replay">
                        Play again?
                    </a>
                </div>
            );
        } else {
            return null;
        }
    }
}

GameOver.propTypes = {
    isGameOver: PropTypes.bool,
    handleReload: PropTypes.func.isRequired,
};

export default GameOver;
