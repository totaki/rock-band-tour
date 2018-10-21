import AT from './actionTypes';
import moment from 'moment';
import defaults from '../defaults';

const INITIAL_MONEY = 100;
const INITIAL_FASMOUS= 10;
const MAX_FAMOUS = 10000;
const MIN_VALUE_AFFECTED_PRECENT = 0.1;

const FAMOUS_MULTIPLIER = 0.02;
const PROMO_MULTIPLIER = 0.01;
const SCORES_MULTIPLIER = 0.1;

const initialState = {
    groupIndex: null,
    group: null,
    timeout: null,
    dt: moment('201801031200', 'YYYYMMDDhhmm'),
    speed: 0,
    money: INITIAL_MONEY,
    deltaMoney: 0,
    famous: INITIAL_FASMOUS,
    deltaFamous: 0,
    scores: 0,
    showGroupInfo: null,
    showStore: null,
    showEventResult: null,
    showInstruments: null,
    showTransfer: null,
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
            let price = action.price;
            if (!eventPromo[eventId]) {
                eventPromo[eventId] = [promoId]
            } else {
                if (eventPromo[eventId].indexOf(promoId) > -1) {
                    eventPromo[eventId] = eventPromo[eventId].filter(i => i !== promoId)
                    price = -price;
                } else {
                    eventPromo[eventId].push(promoId)
                }
            }
            return {
                ...state,
                eventPromo: eventPromo,
                money: state.money - price
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
        case AT.showStore:
            return {
                ...state,
                showStore: action.showStore
            };
            case AT.showInstruments:
            return {
                ...state,
                showInstruments: action.showInstruments
            };
            case AT.showTransfer:
            return {
                ...state,
                showTransfer: action.showTransfer
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
            let volumeAffected = action.eventData.size * state.famous * FAMOUS_MULTIPLIER;
            volumeAffected += action.eventData.size * action.promoResult * PROMO_MULTIPLIER;

            if (volumeAffected > action.eventData.size) {
                volumeAffected = action.eventData.size
            }
            if (volumeAffected < action.eventData.size * MIN_VALUE_AFFECTED_PRECENT) {
                volumeAffected = action.eventData.size * MIN_VALUE_AFFECTED_PRECENT
            }
            const moneyEarned = volumeAffected * action.eventData.price;
            console.log(volumeAffected);
            console.log(moneyEarned);
            let famous = state.famous + (volumeAffected * action.eventScores * SCORES_MULTIPLIER);
            if (famous > MAX_FAMOUS){
                famous = MAX_FAMOUS
            }
            state = {
                ...state,
                famous: famous,
                deltaFamous: famous - state.famous,
                money: state.money + moneyEarned,
                scores: action.eventScores,
                deltaMoney: moneyEarned,
                startEventId: null,
                stopEventId: action.eventData.id,
            };
            console.log(state);
            return state;
        case AT.showEventResult:
            return {
                ...state,
                showEventResult: action.value
            };
        default:
            return state
    }
}