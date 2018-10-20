import React, { Component } from 'react';
import ConfirmButton from '../components/button/ConfirmButton';
import defaults from '../defaults'
import './EventInfo.scss'
import CancelButton from "../components/button/CancelButton";
import EventHeader from "../components/event/EventHeader";
import EventDetail from "../components/event/EventDetail";
import EventPromo from "./EventPromo";


class EventInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {groupIndex: null};
    }

    render() {
        return (
            <div className="event_info_container">
                <EventHeader date="21.10.2018" time="18:00" money="100"/>
                <div className="event_info_wrapper">
                    <div className="row_container">
                        <EventDetail props={this.props} />
                        <EventPromo props={this.props}/>
                    </div>
                    <div className="row_container">
                        <CancelButton title="Отмена"/>
                        <ConfirmButton title="Выбрать"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventInfo;
