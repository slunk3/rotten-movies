import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class CreatePlayer extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.initialsInput(e.target.initials.value);
    }

    render() {
        return (
            <form
                className="create-player-form center"
                onSubmit={this.handleSubmit}
            >
                <label htmlFor="intials">Enter player initials</label>
                <input type="text"
                    name="initials"
                    maxLength="3"
                    id="initials"
                />
                <button>Play</button>
            </form>
        );
    }
}

CreatePlayer.propTypes = {
    initialsInput: PropTypes.func,
};

export default CreatePlayer;
