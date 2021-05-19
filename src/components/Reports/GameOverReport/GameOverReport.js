import React from 'react';
import {Link} from 'react-router-dom';
import Modal from '../../../containers/Modal/Modal';

import './GameOverReport.scss';

function GameOverReport(props) {
    return (
        <Modal>
            <div className="gameOverReport">
                <img className="gameOverReport__emoji" src={process.env.PUBLIC_URL + '/images/sad.png'} />
                <p className="gameOverReport__message">Wanna Try again</p>

                <div className="gameOverReport__game-stats">
                    <p className="gameOverReport__score">Score : {props.score}</p>
                    <p class="gameOverReport__level">Level : {props.level}</p>
                </div> 

                <div className="gameOverReport__correct-note">
                    <p className="gameOverReport__correct-note-label">Correct Note</p>
                    <span className="gameOverReport__solution">{props.randomlySelectedNote.toUpperCase()}</span>
                </div> 

                <div class="gameOverReport__btn">
                    <button className="gameOverReport__btn-play-again" onClick={props.newGameHandler}>Play Again</button>
                    <Link to="/select-scale"><button className="gameOverReport__btn-change-scale">Change Scale</button></Link>
                </div>              
            
            </div>
        </Modal>
    )
}

export default GameOverReport
