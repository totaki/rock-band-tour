import React, { Component } from 'react';
import { connect } from "react-redux";
import defaults from '../defaults';
import ConfirmButton from '../components/button/ConfirmButton';
import './EventInfo.scss'
import CancelButton from "../components/button/CancelButton";
import EventHeader from "../components/event/EventHeader";
import EventDetail from "../components/event/EventDetail";
import { eventAction, updatePromo } from "../controller";


const LeftColumn = ({ date, place, size, price }) => {
    return (
        <div className="event_info_cols">
            <div>
                <p>Дата и время</p>
                <p>Место</p>
                <p>Вместимость</p>
                <p>Цена билета</p>
            </div>
            <div>
                <p>{date}</p>
                <p>{place}</p>
                <p>{size}</p>
                <p>{price}</p>
            </div>
        </div>
    )
};

const Radio = ({ set, setPromo }) => {
    return (
        <div className="promo-radio" onClick={setPromo}>
            {set ? <div className="promo_enable"/> : null }
        </div>
    )
};

const RightColumn = ({ promos=[], setPromo=() => {} }) => {
    return (
        <div className="events_promo_items">
            <div>
            {
                defaults.eventsPromo.map((i, j) => {
                    const set = promos.indexOf(j) > -1;
                    return (
                        <div key={`prom-0-${j}`} className="events_promo_item">
                            <Radio set={set} setPromo={() => setPromo(j)}/> <span>{i[0]}</span>
                        </div>
                    )
                })
            }
                <div className="events_promo_item">
                    <span>Всего</span>
                </div>
            </div>
            <div>
            {
                defaults.eventsPromo.map((i, j) => {
                    return (
                        <div key={`prom-1-${j}`} className="events_promo_item">
                            <span>{i[1]}</span>
                        </div>
                    )
                })
            }
                <div className="events_promo_item">
                    <span>{promos.reduce((p, c) => p + defaults.eventsPromo[c][1], 0)}</span>
                </div>
            </div>
        </div>
    )
};

class EventInfo extends Component {
    render() {
        const { showEventId, updatePromo, eventPromo } = this.props;
        const eventData = defaults.events[showEventId - 1];
        return (
            <div className="event_info_container">
                <LeftColumn {...eventData}/>
                <RightColumn setPromo={(i) => updatePromo(i, showEventId)}
                             promos={eventPromo[showEventId] || []}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        setEventId: state.setEventId,
        showEventId: state.showEventId,
        eventPromo: state.eventPromo
    };
}

function mapStateToDispatch(dispatch) {
    return {
        updatePromo: (promoId, eventId) => dispatch(updatePromo(promoId, eventId)),
        createEvent: (i) => dispatch(eventAction.create(i)),
        closeEvent: () => dispatch(eventAction.open(null)),
    };
}

export default connect(mapStateToProps, mapStateToDispatch)(EventInfo);
