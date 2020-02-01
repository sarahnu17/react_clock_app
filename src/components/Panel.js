import React from 'react';
import PropTypes from 'prop-types';
import "./Panel.css";

/* Saved the state dateOn as a propType */

const Panel = (props) => {
    return (
        <div className="container">
            <div className="col-md-4 mx-auto">
                    <div className="panel">
                        <label id="date-switch" className="switch">
                            <input type="checkbox" checked={props.dateOn} onChange={props.toggleDate}/>
                            <span className="slider round"> </span>
                        </label>
                        <label className="calendarSwitch" htmlFor="date-switch">
                            <i className="fas fa-calendar-alt">
                            </i>
                        </label>
                    </div>
            </div>
        </div>
    )
};

// Default Props
Panel.defaultProps = {
    dateOn: false,
    toggleDate: () => {},
};

// PropTypes
Panel.propTypes = {
    dateOn: PropTypes.bool,
    toggleDate: PropTypes.func
}


export default Panel

