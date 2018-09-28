import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class CreatePlayer extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.initialsInput(e.target.initials.value);
    }

    handleChange() {
        document.getElementById('play').removeAttribute('disabled');
    }

    render() {
        return (
            <form
                className="create-player-form center"
                onSubmit={this.handleSubmit}
            >
                <div className="input-field">
                    <input
                        type="text"
                        name="initials"
                        maxLength="3"
                        id="initials"
                        onChange={this.handleChange}
                        autoComplete="off"
                    />
                    <label htmlFor="intials">Enter player initials</label>
                    <button
                        id="play"
                        className="waves-effect waves-light btn-large"
                        disabled
                    >
                        Play
                    </button>
                </div>
            </form>
        );
    }
}

CreatePlayer.propTypes = {
    initialsInput: PropTypes.func,
};

export default CreatePlayer;
