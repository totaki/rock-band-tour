import React, { Component } from 'react';
import { connect } from "react-redux";

class Timer extends Component {
    render() {
        const { dt } = this.props;
        return (
            <div className="timer">
                <span>{dt.getDate()}.{dt.getMonth()}.{dt.getFullYear()}</span> <span>{dt.getHours()}:{dt.getMinutes()}</span>
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