import React, { Component } from 'react';
import { connect } from "react-redux";
import defaults from '../defaults';
import './EventInfo.scss'
import {eventAction, showEventResult, updatePromo} from "../controller";
import MainButton from "../components/button/MainButton";
import './EventResult.scss';

const FAMOUS_BORDER = 0

class EventResult extends Component {
    render() {
        const { deltaMoney, deltaFamous, hideEventResult } = this.props;
        const fire = deltaFamous > FAMOUS_BORDER;
        const backGround = fire ?  'result_fire.svg' : 'result_no_fire.svg';
        console.log(deltaMoney, deltaFamous);
        return (
            <div className="event_result">
                <div className="event_result_left" style={{backgroundImage: `url(/assets/images/${backGround})`}}>
                </div>
                <div className="event_result_right">
                    <h3>{fire ? 'ВЫСТУПЛЕНИЕ ОГОНЬ' : 'ВЫСТУПЛЕНИЕ НЕ ОЧ'}</h3>
                    <div className="event_result_score_items">
                        <div>
                            <p>Заработок</p>
                            <p>Успешность</p>
                        </div>
                        <div>
                            <p>{deltaMoney}</p>
                            <p>{deltaFamous}</p>
                        </div>
                    </div>
                    <MainButton title={fire ? 'УРА' : 'НУ ОК'} onClick={hideEventResult}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        deltaMoney: state.deltaMoney,
        deltaFamous: state.deltaFamous
    };
}

const mapStateToDispatch = (dispatch) => {
    return {
        hideEventResult: () => dispatch(showEventResult(false))
    };
};

export default connect(mapStateToProps, mapStateToDispatch)(EventResult);
