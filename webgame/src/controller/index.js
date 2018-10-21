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
        eventId,
        promoId
});


const eventResult = (eventScores, eventId, eventPromo) => {
    console.log(eventId, eventPromo);
    const promo = eventPromo[eventId];
    const promoResult = promo.reduce(function (sum, current) {
        return sum + defaults.eventsPromo[current][1]
    }) / 10;
    return {
        type: AT.eventResult,
        eventScores: eventScores,
        eventData: defaults.events[eventId],
        promoResult: promoResult
    }
};

const store = createStore(commonReducer, applyMiddleware(thunk));

const tick = () => dispatch => {
    const timeout = setInterval(() => {
            dispatch({type: AT.tick})
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
    eventResult
}