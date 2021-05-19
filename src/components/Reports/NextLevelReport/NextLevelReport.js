import React from 'react';
import Modal from '../../../containers/Modal/Modal';
import './NextLevelReport.scss';

function NextLevelReport(props) {
    return (
        <Modal>
            <div className="nextLevelReport">
                <img className="nextLevelReport__emoji" src={process.env.PUBLIC_URL + '/images/happy.png'} />
                <p className="nextLevelReport__message">Well Played, Maestro</p>
                <div class="nextLevelReport__btn">
                    <button className="nextLevelReport__btn-next-level" onClick={props.nextLevelHandler}>Play Level {props.level}</button>
                </div>
            </div>
        </Modal>
    )
}

export default NextLevelReport
