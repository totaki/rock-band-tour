import React, {Component} from 'react';
import './Store.scss'
import {showInstruments, showTransfer} from "../../controller";
import connect from "react-redux/es/connect/connect";

function instruments() {
    return (
        <div className="group_view_container">
            <div className="instruments_all"/>
        </div>
    );
}

function store(_showInstruments) {
    return (
        <div className="group_view_container">
            <div className="seller"/>
            <div className="items">
                <div className="instruments" onClick={()=> _showInstruments()}/>
                <div className="transfer"/>
            </div>
        </div>
    )
}

class GameStore extends Component {
    render() {
        const {showInstruments, showTransfer, _showInstruments, _showTransfer} = this.props;
        return (
            showInstruments ? instruments() : store(_showInstruments)
    )
    }
}

function mapStateToProps(state) {
    return {
        showInstruments: state.showInstruments,
        showTransfer: state.showTransfer
    };
}

function mapStateToDispatch(dispatch) {
    return {
        _showInstruments: () => dispatch(showInstruments(true)),
        _showTransfer: () => dispatch(showTransfer(true))
    };
}

export default connect(
    mapStateToProps,
    mapStateToDispatch
)(GameStore);
