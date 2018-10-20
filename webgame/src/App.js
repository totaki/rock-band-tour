import React, { Component } from 'react';
import { Howl } from 'howler';
import ChoiceGroup from './containers/ChoiceGroup';
import MainScreen from './containers/MainScreen';
import { connect } from "react-redux";
import './App.css';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import EventInfo from "./containers/EventInfo";
import { eventAction } from "./controller";

const COMMON_MODAL_STYLE = {
    backgroundColor: "#161616",
    width: "50%",
    height: "50%",
};

class App extends Component {

  render() {
    const { group, showEventId, closeEvent, showGroupInfo } = this.props;
    return (
      <div className="App">
          {group ? <MainScreen/> : <ChoiceGroup/>}
          <Rodal visible={!!showEventId}
                 onClose={closeEvent}
                 animation="slideRight"
                 showCloseButton={false}
                 customStyles={COMMON_MODAL_STYLE}>
              Hello world
              <EventInfo/>
          </Rodal>
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
        group: state.group,
        showEventId: state.showEventId,
        showGroupInfo: state.showGroupInfo
    };
}

function mapStateToDispatch(dispatch) {
    return {
        closeEvent: () => dispatch(eventAction.show(null)),
    };
}

export default connect(mapStateToProps, mapStateToDispatch)(App);
