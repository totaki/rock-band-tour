import React, { Component } from 'react';
import { connect } from "react-redux";
import './Timer.scss';
import SpeedControl from "./SpeedControl";

class Timer extends Component {
    render() {
        const { dt } = this.props;
        const dateString = "01-01-2018";
        const timeString = "12:00";
        return (
            <div>
                <div className="timer">
                    <div className="timer_date">
                        <span>{dateString}</span>
                    </div>
                    <div className="timer_time">
                        <span>{timeString}</span>
                    </div>
                </div>
                <SpeedControl/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        dt: state.dt
    };
}

export default connect(mapStateToProps, null)(Timer);