import { createStore, applyMiddleware } from 'redux';
import defaults from '../defaults';
import thunk from 'redux-thunk';
import commonReducer from './commonReducer';
import AT from './actionTypes';

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
    tick
}