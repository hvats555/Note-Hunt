import React from 'react';
import musicScales from '../../musicScales';

import './SelectScale.scss';


let SelectScale = (props) => {
    
    return (
        <div className="scaleSelector">
            <div class="scaleSelector__controls">
                { Object.keys(musicScales).map(e => (
                    <button className={`scaleSelector__btn ${e == props.selectedScale ? 'scaleSelector__btn-selected' : ''}`} onClick={() => {props.selectedScaleStateHandler(e)} } key={e}>{e.toUpperCase()}</button>
                ))}
            </div>

        </div>
    )
}

export default SelectScale;