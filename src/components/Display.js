import React from 'react';
import PropTypes from 'prop-types';
import "./Clock.css";

/* Needs to check if dateOn is changed inorder to display the date */


function Display (props) {
    return (
        <div className="container">
            <div className="col-md-4 mx-auto">
                <div className="clock">
                    <div className="clockTime">{String(props.time)}</div>
                    {props.dateOn && <div className="clockDate">{String(props.date)}</div> }
                </div>
            </div>
        </div>
    );
}

Display.defaultProps = {
    time: new Date(),
    date: new Date(),
    dateOn: false
};

Display.propTypes = {
    time: PropTypes.string,
    date: PropTypes.string,
    dateOn: PropTypes.bool
};

export default Display;

