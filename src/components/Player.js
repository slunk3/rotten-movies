import React from 'react';
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class Player extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: null,
            playerScore: 0,
            currentStreak: 0
        };
    }


    render() {
        return <div>Player 1</div>;
    }
}

export default Player;