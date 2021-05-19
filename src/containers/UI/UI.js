import React, {useState} from 'react';
import './UI.scss';

function UI(props) {
    return (
        <div>

            <div className="game__container">
                {props.children}
            </div>
        </div>
    )
}

export default UI;
