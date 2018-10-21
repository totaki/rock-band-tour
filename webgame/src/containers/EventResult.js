import React, { Component } from 'react';
import { connect } from "react-redux";
import defaults from '../defaults';
import './EventInfo.scss'
import { eventAction, updatePromo } from "../controller";
import MainButton from "../components/button/MainButton";


const LeftColumn = ({ date, place, size, price }) => {
    return (
        <div className="event_info_cols">
            <div>
                <p>Дата</p>
                <p>Время</p>
                <p>Место</p>
                <p>Вместимость</p>
                <p>Цена билета</p>
            </div>
            <div>
                <p>{date && date.format('DD.MM.YYYY')}</p>
                <p>{date && date.format('HH:mm')}</p>
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

class EventResult extends Component {
    render() {
        const { showEventId, updatePromo, eventPromo, closeEvent, createEvent, sheduleEventsIds } = this.props;
        const eventSheduled = sheduleEventsIds.indexOf(showEventId) > -1;
        const eventData = defaults.events[showEventId - 1];
        const setPromo = !eventSheduled ? (i) => updatePromo(i, showEventId) : () => {};
        return (
            <div className="event_info">
                <div className="event_info_container">
                    <LeftColumn {...eventData}/>
                    <RightColumn setPromo={setPromo}
                                 promos={eventPromo[showEventId] || []}/>
                </div>
                <div className="event_info_control">
                    <div className="event_cancel_btn" onClick={closeEvent}>Отмена</div>
                    {(showEventId && !eventSheduled) ? <MainButton title="Выбрать" onClick={() => createEvent(showEventId)}/> : null}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        setEventId: state.setEventId,
        showEventId: state.showEventId,
        eventPromo: state.eventPromo,
        sheduleEventsIds: state.sheduleEventsIds
    };
}

function mapStateToDispatch(dispatch) {
    return {
        updatePromo: (promoId, eventId) => dispatch(updatePromo(promoId, eventId)),
        createEvent: (i) => dispatch(eventAction.create(i)),
        closeEvent: () => dispatch(eventAction.show(null)),
    };
}

export default connect(mapStateToProps, mapStateToDispatch)(EventResult);
