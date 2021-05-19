import React from 'react';
import './DisplayResult.scss';

function DisplayResult(props) {
    const displayMessage = () => {
        let messageColorClass;
        let message;
        if(props.guessResult){
            messageColorClass = "feedback__success";
            message = "Correct, Well Done!";
        }

        if(props.guessResult == false & !props.gameOver){
            messageColorClass = "feedback__failure";
            message = `Oops, Listen carefully. ${props.attemptsLeft} attempts left.`;
        }

        if(props.gameOver){
            messageColorClass = "feedback__failure";
            message = "Game Over! Try Again.";
        }

        return <div className={`feedback ${messageColorClass}`}>{message}</div>
    }
    return (
        <div>
            {displayMessage()}
        </div>
    )
}

export default DisplayResult
