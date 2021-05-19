import React from 'react';
import Modal from '../Modal/Modal';
import './GameTutorial.scss';

function GameTutorial(props) {
    return (
        <Modal>
            <div className="gameTutorial">
                <h1 className="gameTutorial__heading">Note hunt tutorial</h1>
                <p className="gameTutorial__paragraph">Note Hunt is an ear traning program that gamifies the ear traning process for musicians</p>
                <h2 className="gameTutorial__subHeading">Scale selection</h2>
                <p className="gameTutorial__paragraph">When user clicks on play game button, he is asked to select the music scale.
                    Scale is set to <strong>C major by default</strong>, user can choose any major scale as per his traning prefrences.
                </p>

                <h2 className="gameTutorial__subHeading">Gameplay</h2>
                <p className="gameTutorial__paragraph">
                    A <strong>random note is played</strong> from the selected scale, user has to guess the right note played.
                    He can take help of by playing root note and then calculate the distance of the random note played by using <em>
                        major scale
                        formule that is W W H W W W H
                    </em>.
                </p>

                <p className="gameTutorial__paragraph">
                    There are <strong>3 attempts</strong> provided to guess the right note.
                    <strong>10 points are awarded for correct answer</strong> and user is promoted to the next level.
                </p>

                <p className="gameTutorial__paragraph">
                    <strong>Game ends if all the attempts are used.</strong>
                </p>

                <button className="gameTutorial__close-btn" onClick={props.gameTutorialHandler}>Close</button>

            </div>

        </Modal>
    )
}

export default GameTutorial
