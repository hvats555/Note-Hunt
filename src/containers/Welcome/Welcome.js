import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import GameTutorial from '../GameTutorial/GameTutorial';

import './Welcome.scss';

function Welcome() {
    const [isGameTutorialOpen, setIsGameTutorialOpen] = useState(false);

    const gameTutorialHandler = () => {
        setIsGameTutorialOpen(!isGameTutorialOpen);
    }
    
    return (
        <div className="welcome">
             <h1 className="welcome__heading">Note Hunt</h1>
             <p className="welcome__subheading">Fun and simple way to train your ears</p>

             <div className="welcome__cover">
                <img className="welcome__cover-image" src={process.env.PUBLIC_URL + '/images/cover.jpg'} />
            </div>

            <div className="welcome__btn-container">
                <button className="welcome__how-to-play-btn" onClick={gameTutorialHandler}>How to play?</button>
                <Link to="/select-scale"><button className="welcome__play-btn">Play Now!</button></Link>
            </div>

            {isGameTutorialOpen ?
                <GameTutorial gameTutorialHandler={gameTutorialHandler} /> : null
            }


        </div>
    )
}

export default Welcome
