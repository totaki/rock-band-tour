import defs from '../defaults';
import AT from './actionTypes';

const initialState = {
    groupIndex: null,
    group: null,
    dt: new Date(2018, 1, 1, 12, 0, 0),
    speed: 0,
    showGroupInfo: false,
    showEventId: null,
    createEventId: null,
    startEventId: null,
    stopEventId: null,
    eventPromo: {}
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case AT.updateEventPromo:
            const eventPromo = {...state.eventPromo};
            const { promoId, eventId } = action;
            if (!eventPromo[eventId]) {
                eventPromo[eventId] = [promoId]
            } else {
                if (eventPromo[eventId].indexOf(promoId) > -1) {
                    eventPromo[eventId] = eventPromo[eventId].filter(i => i !== promoId)
                } else {
                    eventPromo[eventId].push(promoId)
                }
            }
            return {
                ...state,
                eventPromo: eventPromo
            };
        case AT.showEventId:
            return {
                ...state,
                showEventId: action.index
            };
        case AT.setGroup:
            return {
                ...state,
                groupIndex: action.index
            };
        case AT.setSpeed:
            return {
                ...state,
                speed: action.speed
            };
        case AT.startGame:
            return {
                ...state,
                group: defs.groups[state.groupIndex - 1]
            };
        case AT.showGroupInfo:
            return {
                ...state,
                showGroupInfo: action.showGroupInfo
            };
        default:
            return state
    }
}