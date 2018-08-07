import React from 'react';

const PlayerLives = result => {
    let lives = result.playerLives;
    let lifeLi = [];
    for (let i = 0; i < lives; i++) {
        lifeLi.push(
            <li key={i}>
                <img src="./src/images/8bit-heart.png" />
            </li>
        );
    }

    return lifeLi;
};

export default PlayerLives;
