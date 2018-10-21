import AT from './actionTypes';
import moment from 'moment';
import defaults from '../defaults';

const INITIAL_MONEY = 100;
const INITIAL_FASMOUS= 10;

const initialState = {
    groupIndex: null,
    group: null,
    timeout: null,
    dt: moment('201801011200', 'YYYYMMDDhhmm'),
    speed: 0,
    money: INITIAL_MONEY,
    famous: INITIAL_FASMOUS,
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
    return defaults.events[i - 1].date.format('X')
};

const SPEED_MODIFIER = 200;

export default (state = initialState, action = {}) => {
    let { timeout } = state;
    switch (action.type) {
        case AT.setStartEventId:
            console.log(state.sheduleEventsIds);
            state.sheduleEventsIds.sort((i, j) => getTS(j) - getTS(i));
            const toStartEventId = state.sheduleEventsIds.pop();
            return {
                ...state,
                sheduleEventsIds: [...state.sheduleEventsIds],
                startEventId: toStartEventId
            };
        case AT.setEventId:
            const { index } = action;
            console.log('setEventId',action);
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
                group: defaults.groups[state.groupIndex - 1]
            };
        case AT.showGroupInfo:
            return {
                ...state,
                showGroupInfo: action.showGroupInfo
            };
        case AT.eventResult:
            console.log(action);
            let volumeAffected = action.eventData.size * state.famous * 0.05;
            volumeAffected += action.eventData.size * action.promoResult * 0.01;

            if (volumeAffected > action.eventData.size) {
                volumeAffected = action.eventData.size
            }
            if (volumeAffected < action.eventData.size / 20) {
                volumeAffected = action.eventData.size / 20
            }
            const moneyEarned = volumeAffected * action.eventData.price;
            console.log(volumeAffected);
            console.log(moneyEarned);
            let famous = state.famous + (volumeAffected * action.eventScores * 0.1);
            if (famous > 10000){
                famous = 10000
            }
            state = {
                ...state,
                famous: famous,
                money: state.money + moneyEarned,
                startEventId: null,
                stopEventId: action.eventData.id,
            };
            console.log(state);
            return state;

        default:
            return state
    }
}