import React, { Component } from 'react';
import ChoiceGroup from './containers/ChoiceGroup';
import MainScreen from './containers/MainScreen';
import { connect } from "react-redux";
import './App.css';

class App extends Component {
  render() {
    const { group } = this.props;
    return (
      <div className="App">
          {group ? <MainScreen/> : <ChoiceGroup/>}
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        group: state[0].group
    };
}

export default connect(mapStateToProps, null)(App);
