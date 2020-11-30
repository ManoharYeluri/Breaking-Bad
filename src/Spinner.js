import React from 'react';
import "./Spinner.css";
import SpinnerGIF from "./img/spinner.gif";

const Spinner = () => {
    return (
        <div>
            <div className="spinner">
                <img src={SpinnerGIF} alt="loading-spinner" />
            </div>
            <div className="just-for-height"></div>
        </div>
    )
}

export default Spinner
