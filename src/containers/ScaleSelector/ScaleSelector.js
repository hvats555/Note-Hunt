import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import SelectScale from '../../components/SelectScale/SelectScale';
import DisplaySelectedNotes from '../../components/DisplayScaleNotes/DisplayScaleNotes';

import {ScaleContext} from '../../context/ScaleContext';

import './ScaleSelector.scss';

function ScaleSelector(props) {
    const [selectedScale, setSelectedScale] = useContext(ScaleContext);

    const selectedScaleStateHandler = (selectedScale) => {
        setSelectedScale(selectedScale);
    }

    return (
        <div className="scaleSelector__container">
            <h1 className="scaleSelector__heading">Select Scale</h1>

            <SelectScale selectedScaleStateHandler={selectedScaleStateHandler} selectedScale={selectedScale} />

            <DisplaySelectedNotes selectedScale={selectedScale}/>
            
            <div class="scaleSelector__continue">
                <Link to="/play">
                    <button className="scaleSelector__continue-btn">Save and Continue</button>
                </Link>
            </div>
        </div>
    )
}

export default ScaleSelector
