import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const PlayerForm = ({ onChange, onSave }) => {
    return (
        <form onSubmit={onSave}>
            <label>
                Name:
                <input type="text" onChange={onChange} />
            </label>
        </form>
    );
};

PlayerForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
};

export default PlayerForm;
