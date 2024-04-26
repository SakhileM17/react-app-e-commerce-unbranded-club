import React from "react";

//image
import toasterTick from '../../assets/toastertick.png' // summer/winter collection images

const Toast = ({message, onClose}) => {

    return (

        <div className="toast">

            <div className="toast-button-container">
                <img  className='toast-tick-img' src={toasterTick} alt="tick black"/>
            </div>

            <div className="toast-button-container">
                <p>{message}</p>
            </div>

            <div className="toast-button-container">
                <button className="toast-close-button" onClick={onClose}>Cart</button>
            </div>

        </div>
    )


}

export default Toast