import React from 'react';
import "./Modal.scss";

function Modal(props) {
    return (
        <div className="backdrop">
            <div className="modal">
                {props.children}
            </div>
        </div>
    )
}

export default Modal
