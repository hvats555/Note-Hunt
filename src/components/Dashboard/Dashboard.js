import React from 'react';
import {Link} from 'react-router-dom';
import './Dashboard.scss';

function Dashboard(props) {
    return (
        <div class="game__dashboard">
            <Link style={{width: '100%'}} to='/select-scale'><button className="game__dashboard-btn game__dashboard-btn-change-scale">Change Scale</button></Link>
            <button onClick={props.newGameHandler} className="game__dashboard-btn game__dashboard-btn-new-game">New Game</button>
        </div>
    )
}

export default Dashboard
