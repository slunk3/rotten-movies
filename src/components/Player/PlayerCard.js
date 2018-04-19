import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const PlayerCard = ({name, playerScore}) => {
    return (
        <div>
            <div>
                <h2>{name}</h2>
            </div>
            <div>
                Score: <span>{playerScore}</span>
            </div>
            <div>
                Streak: <span>{}</span>
            </div>
        </div>
    );
};

PlayerCard.propTypes = {
    name: PropTypes.func.isRequired,
    playerScore: PropTypes.func.isRequired
};

export default PlayerCard;