import React from 'react';
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import PlayerForm from "./PlayerForm";
import PlayerCard from "./PlayerCard";

class Player extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }
    
    handleChange(e) {
        this.setState({name: e.target.value});
    }

    handleSave(e) {
        e.preventDefault();
        console.log('Player Name: ' + this.state.name);
    }

    render() {
        return <div>
                <PlayerForm onChange={this.handleChange} 
                    onSave={this.handleSave} />
                <PlayerCard name={this.state.name}
                    playerScore={this.props.playerScore} />
            </div>;
    }
}

PlayerCard.propTypes = {
    playerScore: PropTypes.number.isRequired
};

export default Player;