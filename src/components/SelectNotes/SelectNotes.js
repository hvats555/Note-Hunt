import React, {useState} from 'react';
import musicScales from '../../musicScales';

import './SelectNotes.scss';


const SelectNotes = (props) => {

    return (
        <div className="game__controls">
            {props.selectedScale ? (
                musicScales[props.selectedScale].map(e => (
                    <button 
                    onClick={
                        () => {
                            props.guessedNoteValidator(e);
                            props.changeBtnColor(e)
                        }
                    } key={e} 
                    className={
                        `game__controls-btn 
                        ${props.btnColor ? Object.keys(props.btnColor).map(k => (k == e ? (`${props.btnColor[k]}`):" ")) : " "}`}>
                        {e.toUpperCase()}
                    </button>
                ))
            ) : <p>Select the scale to play the game.</p>}
        </div>
    )
}

export default SelectNotes;