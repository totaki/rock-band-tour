import React, { Component } from 'react';
import Header from "../components/Header";
import Map from '../components/Map';
import MainMenu from '../components/Menu';
import { connect } from "react-redux";


class MainScreen extends Component {
    render() {
        const { group } = this.props;
        return (
            <div>
                <Map onClick={console.log}/>
                <Header group={group}/>
                <MainMenu/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        group: state.group
    };
}

export default connect(mapStateToProps, null)(MainScreen);