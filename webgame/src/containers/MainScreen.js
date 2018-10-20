import React, { Component } from 'react';
import Header from "../components/Header";
import Map from '../components/Map';
import { connect } from "react-redux";


class MainScreen extends Component {
    render() {
        const { group } = this.props;
        return (
            <div>
                <Map onClick={console.log}/>
                <Header avatar={group.avatar}/>
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