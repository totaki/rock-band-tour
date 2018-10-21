import React, {Component} from 'react';
import {connect} from "react-redux";
import './Menu.scss';
import {eventAction, showStore} from "../controller";


const MenuButton = ({content, onClick}) => {
    return <div className="menu_item" onClick={onClick}>{content}</div>
};

class MainMenu extends Component {
    render() {
        const {showGameStore} = this.props;
        return (
            <div className="menu">
                <MenuButton content="Социальные сети" onClick={() => {}}/>
                <MenuButton content="Статистика" onClick={() => {}}/>
                <MenuButton content="Календарь" onClick={() => {}}/>
                <MenuButton content="Магазин" onClick={() => showGameStore()}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
    };
}

function mapStateToDispatch(dispatch) {
    return {
        showGameStore: () => dispatch(showStore(true)),
    };
}

export default connect(mapStateToProps, mapStateToDispatch)(MainMenu);