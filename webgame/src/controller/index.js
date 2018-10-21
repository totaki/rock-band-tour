import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import commonReducer from './commonReducer';
import AT from './actionTypes';
import defaults from "../defaults";

const setGroup = (index) => {
    return {
        type: AT.setGroup,
        index: index
    }
};

const setSpeed = (speed) => {
    return {
        type: AT.setSpeed,
        speed: speed
    }
};

const startGame = () => {
    return {
        type: AT.startGame,
    }
};

const showGroupInfo = (value) => {
    return {
        type: AT.showGroupInfo,
        showGroupInfo: value
    }
};

const showEventResult = (value) => {
    console.log(value);
    return {
        type: AT.showEventResult,
        value
    }
};


const eventAction = {
    show: (i) => ({
        type: AT.showEventId,
        index: i
    }),
    create: (i) => ({
        type: AT.setEventId,
        index: i
    }),
    start: (i) => ({
        type: AT.setStartEventId,
        index: i
    }),
    stop: (i) => ({
        type: AT.setStopEventId,
        index: i
    })
};

const updatePromo = (promoId, eventId) => ({
        type: AT.updateEventPromo,
        price: defaults.eventsPromo[promoId][1],
        eventId,
        promoId,
});


const eventResult = (eventScores, eventId, eventPromo) => {
    console.log(eventId, eventPromo);
    const promo = eventPromo[eventId];
    let promoResult = 0;
    if (promo) {
        promoResult = promo.reduce(function (sum, current) {
            return sum + defaults.eventsPromo[current][1]
        }) / 10;
    }
    return {
        type: AT.eventResult,
        eventScores: eventScores,
        eventData: defaults.events[eventId - 1],
        promoResult: promoResult
    }
};

const store = createStore(commonReducer, applyMiddleware(thunk));

const tick = () => (dispatch, getState) => {
    const timeout = setInterval(() => {
            const { dt, sheduleEventsIds } = getState();
            const eventsForStart = sheduleEventsIds.filter(i => {
                return defaults.events[parseInt(i) - 1].date.diff(dt) <= 0
            });
            if (eventsForStart.length) {
                dispatch(setSpeed(0));
                dispatch({type: AT.setStartEventId})
            } else {
                dispatch({type: AT.tick})
            }
        }, 1000);
    dispatch({type:AT.setTimeout, timeout})
};

export {
    setGroup,
    startGame,
    showGroupInfo,
    setSpeed,
    eventAction,
    updatePromo,
    store,
    tick,
    eventResult,
    showEventResult
}