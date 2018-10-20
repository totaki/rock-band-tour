import { createStore, combineReducers } from 'redux';
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

const store = createStore(commonReducer);

export {
    setGroup,
    startGame,
    showGroupInfo,
    setSpeed,
    eventAction,
    updatePromo,
    store
}