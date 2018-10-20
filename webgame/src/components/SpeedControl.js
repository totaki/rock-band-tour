import React, { Component } from 'react';
import { connect } from "react-redux";
import './SpeedControl.scss';
import { setSpeed } from "../controller";


const CircleButton = ({ content, active, onClick }) => {
    const className = active ? 'circle_button_active'  : 'circle_button';
    if (active) {
        return <div className={className}>{content}</div>
    } else {
        return <div className={className} onClick={onClick}>{content}</div>
    }
};

class SpeedControl extends Component {
    render() {
        const { speed, setSpeed } = this.props;
        return (
            <div className="speed_control">
                <CircleButton content="P" active={speed === 0} onClick={() => setSpeed(0)}/>
                <CircleButton content="x1" active={speed === 1} onClick={() => setSpeed(1)}/>
                <CircleButton content="x2" active={speed === 2} onClick={() => setSpeed(2)}/>
                <CircleButton content="x3" active={speed === 3} onClick={() => setSpeed(3)}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        speed: state.speed
    };
}

function mapStateToDispatch(dispatch) {
    return {
        setSpeed: (i) => dispatch(setSpeed(i)),
    };
}

export default connect(mapStateToProps, mapStateToDispatch)(SpeedControl);