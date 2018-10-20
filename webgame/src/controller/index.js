import { createStore, combineReducers } from 'redux';
import commonReducer from './commonReducer';
import AT from './actionTypes';

const setGroup = (index) => {
    return {
        type: AT.setGroup,
        index: index
    }
};

const startGame = () => {
    return {
        type: AT.startGame,
    }
};

const store = createStore(combineReducers([commonReducer]));

export {
    setGroup,
    startGame,
    store
}