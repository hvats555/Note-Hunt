import React from 'react';
import './GameInfo.scss';

function GameInfo(props) {
    return (
        <div class="game__info">
            <p class="game__info-text">Current scale: {props.selectedScale.toUpperCase()}</p>
            <p class="game__info-text">Attempts left : {props.attemptsLeft}</p>
            <p class="game__info-text">Level: {props.level}</p>
            <p class="game__info-text">Score: {props.score}</p>
        </div>
    )
}

export default GameInfo
