import React, { Component } from 'react';
import { connect } from "react-redux";
import './SpeedControl.scss';
import {setSpeed, tick} from "../controller";


const CircleButton = ({ content, active, onClick }) => {
    const className = active ? 'circle_button_active'  : 'circle_button';
    if (active) {
        return <div className={className}>{content}</div>
    } else {
        return <div className={className} onClick={onClick}>{content}</div>
    }
};

class SpeedControl extends Component {
    setSpeed(i) {
        const { setSpeed, timeout, tick } = this.props;
        if (!timeout) {
            tick()
        }
        setSpeed(i)
    }

    render() {
        const { speed } = this.props;
        return (
            <div className="speed_control">
                <CircleButton content="P" active={speed === 0} onClick={() => this.setSpeed(0)}/>
                <CircleButton content="x1" active={speed === 1} onClick={() => this.setSpeed(1)}/>
                <CircleButton content="x2" active={speed === 2} onClick={() => this.setSpeed(2)}/>
                <CircleButton content="x3" active={speed === 3} onClick={() => this.setSpeed(3)}/>
            </div>
        )
    }

    componentWillUnmount() {
        this.setSpeed(0)
    }
}

function mapStateToProps(state) {
    return {
        speed: state.speed,
        timeout: state.timeout
    };
}

function mapStateToDispatch(dispatch) {
    return {
        setSpeed: (i) => dispatch(setSpeed(i)),
        tick: () => dispatch(tick())
    };
}

export default connect(mapStateToProps, mapStateToDispatch)(SpeedControl);