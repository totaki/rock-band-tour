import React, { Component } from 'react';
import { Howl } from 'howler';
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

  componentDidMount() {
    const sound = new Howl({
      src: ['assets/sounds/group1.mp3']
    });
    sound.fade(0.1, 0.5, 4000);
    sound.play();
  }
}

function mapStateToProps(state) {
    return {
        group: state.group
    };
}

export default connect(mapStateToProps, null)(App);
