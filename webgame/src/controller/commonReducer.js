import defs from '../defaults';
import AT from './actionTypes';
import moment from 'moment';

const initialState = {
    groupIndex: null,
    group: null,
    timeout: null,
    dt: moment('201801011200', 'YYYYMMDDhhmm'),
    speed: 0,
    showGroupInfo: null,
    showEventId: null,
    createEventId: null,
    startEventId: null,
    stopEventId: null,
    eventPromo: {},
    sheduleEventsIds: [],
    finishEventsIds: {}
};

const getTS = (i) => {
    return defs.events[i - 1].date.format('X')
};

const SPEED_MODIFIER = 200;

export default (state = initialState, action = {}) => {
    let { timeout } = state;
    switch (action.type) {
        case AT.setStartEventId:
            state.sheduleEventsIds.sort((i, j) => getTS(j) - getTS(i));
            const toStartEventId = state.sheduleEventsIds.pop();
            return {
                ...state,
                sheduleEventsIds: [...state.sheduleEventsIds],
                startEventId: toStartEventId
            };
        case AT.setEventId:
            const { index } = action;
            const sheduleEventsIds = [...state.sheduleEventsIds];
            sheduleEventsIds.push(index);
            return {
                ...state,
                showEventId: null,
                sheduleEventsIds
            };
        case AT.tick:
            const dt = state.dt.clone();
            dt.add(state.speed * SPEED_MODIFIER, 'minutes');
            return {
                ...state,
                dt
            };
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
            if (!action.speed) {
                clearInterval(timeout);
                timeout = null
            }
            return {
                ...state,
                timeout: timeout,
                speed: action.speed
            };
        case AT.setTimeout:
            return {
                ...state,
                timeout: action.timeout
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