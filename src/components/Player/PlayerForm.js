import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const PlayerForm = ({ onBlur, name }) => {
    if (name === null) {
        return (
            <form>
                <label>
                    Name:
                    <input type="text" onBlur={onBlur} />
                </label>
            </form>
        );
    } else {
        return null;
    }
};

PlayerForm.propTypes = {
    onBlur: PropTypes.func.isRequired,
};

export default PlayerForm;
