import defs from '../defaults';
import AT from './actionTypes';

const initialState = {
    groupIndex: null,
    group: null,
    dt: new Date(2018, 1, 1, 12, 0, 0)
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case AT.setGroup:
            return {
                ...state,
                groupIndex: action.index
            };
        case AT.startGame:
            return {
                ...state,
                group: defs.groups[state.groupIndex - 1]
            };
        default:
            return state
    }
}