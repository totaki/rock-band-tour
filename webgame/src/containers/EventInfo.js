import React, { Component } from 'react';
import ConfirmButton from '../components/button/ConfirmButton';
import './EventInfo.scss'
import CancelButton from "../components/button/CancelButton";
import EventHeader from "../components/event/EventHeader";
import EventDetail from "../components/event/EventDetail";
import {eventAction} from "../controller";
import { connect } from "react-redux";


class EventInfo extends Component {
    render() {
        return (
            <div className="event_info_container">
                <EventHeader date="21.10.2018" time="18:00" money="100"/>
                <div className="event_info_wrapper">
                    <div className="row_container">
                        <EventDetail props={this.props} />
                    </div>
                    <div className="row_container">
                        {/*<CancelButton title="Отмена"/>*/}
                        {/*<ConfirmButton title="Выбрать"/>*/}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        setEventId: state.setEventId,
        showEventId: state.showEventId,
    };
}

function mapStateToDispatch(dispatch) {
    return {
        createEvent: (i) => dispatch(eventAction.create(i)),
        closeEvent: () => dispatch(eventAction.open(null)),
    };
}

export default connect(mapStateToProps, mapStateToDispatch)(EventInfo);
