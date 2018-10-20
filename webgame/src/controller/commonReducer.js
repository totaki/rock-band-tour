import defs from '../defaults';
import AT from './actionTypes';

const initialState = {
    groupIndex: null,
    group: null,
    dt: new Date(2018, 1, 1, 12, 0, 0),
    speed: 0,
    showGroupInfo: false
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
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