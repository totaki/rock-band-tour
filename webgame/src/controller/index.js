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

const showGroupInfo = (value) => {
    return {
        type: AT.showGroupInfo,
        showGroupInfo: value
    }
};

const store = createStore(commonReducer);

export {
    setGroup,
    startGame,
    showGroupInfo,
    store
}