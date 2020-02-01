import React, { Component } from 'react';
import Panel from "./Panel";
import "./Clock.css";

/* Wasn't working before because the toggle swtich in panel wasn't getting saved on the clock state bool */
/* Works now by creating a state dateOn and then passing it down as a prop in the child components */

class Clock extends Component {

    constructor(props) {
        super(props);

        /* Have a state for date and time */

        this.state = {
          time: new Date(),
          date: new Date(),
          dateOn: false, 
        };

        this.toggleDate = this.toggleDate.bind(this);
    }

    // Wanted to be able to update both string and date 
    componentDidMount() {
        this.timer = setInterval(() => {
          this.setState(() => ({ time: new Date().toLocaleTimeString()}));
          this.setState(() => ({ date: new Date().toLocaleDateString()}));
        }, 1000);
    }
    
    
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    // TOGGLE DATE - Will toggle between hiding and showing the date
    toggleDate () {
        this.setState({dateOn: !this.state.dateOn}); 
    } 

    render() {

        return (
            <div className="container">
                <Panel toggleDate={this.toggleDate} dateOn={this.state.dateOn}/>
                <div className="col-md-4 mx-auto">
                    <div className="clock">
                        <div className="clockTime">
                            {String(this.state.time)}
                        </div>
                        {this.state.dateOn && <div className="clockDate">{String(this.state.date)}</div> }
                    </div>
                </div>
            </div>
        )
    }
}

export default Clock;