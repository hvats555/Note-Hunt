import React from 'react';
import musicScales from '../../musicScales';

import './DisplayScaleNotes.scss';

let displayScaleNotes = (props) => {
    return (
        <div className="selectedScaleNotes">
            <p className="selectedScaleNotes__heading">Notes in <strong>{props.selectedScale.toUpperCase()}</strong> scale:- </p>
    
            { props.selectedScale ? (
                <ul className="selectedScaleNotes__list">
                { musicScales[props.selectedScale].map(e => (
                    <li className="selectedScaleNotes__list-item" key={e}>
                        <span className="material-icons selectedNote__icon">music_note</span>{e.toUpperCase()}
                    </li>
                )) }
                </ul>
            )
                : ( null )
            }
        </div>
    )
}

export default displayScaleNotes;