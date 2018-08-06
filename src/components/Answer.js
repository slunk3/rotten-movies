import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Answer = result => {
    let answer = result.isCorrect;
    if (answer !== null) {
        if (answer) {
            return <h3 className="answer center">CORRECT!</h3>;
        } else {
            return <h3 className="answer center">WRONG</h3>;
        }
    } else {
        return null;
    }
};

export default Answer;
