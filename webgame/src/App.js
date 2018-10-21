import React, { Component } from 'react';
import { Howl } from 'howler';
import ChoiceGroup from './containers/ChoiceGroup';
import MainScreen from './containers/MainScreen';
import { connect } from "react-redux";
import './App.css';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import EventInfo from "./containers/EventInfo";
import {eventAction, showEventResult, showStore, showGroupInfo} from "./controller";
import Minigame from "./components/minigame/Minigame";
import GroupInfo from "./containers/group/GroupView";
import EventResult from "./containers/EventResult";
import GameStore from "./components/store/Store";

const COMMON_MODAL_STYLE = {
    backgroundColor: "#161616",
    width: "50%",
    height: "50%",
};

class App extends Component {

  render() {
    const {group, showEventId, closeEvent, showGroupInfo,
        hideGroupInfo, startEventId, stopEventId, showEventResult,
        hideEventResult, showStore, hideStore} = this.props;
    return (
      <div className="App">
          {group ? <MainScreen/> : <ChoiceGroup/>}
          <Rodal visible={!!showEventId}
                 onClose={closeEvent}
                 animation="slideRight"
                 showCloseButton={false}
                 customStyles={COMMON_MODAL_STYLE}>
              <EventInfo/>
          </Rodal>
        <Rodal visible={!!showGroupInfo}
               onClose={hideGroupInfo}
               animation="slideRight"
               showCloseButton={false}
               customStyles={COMMON_MODAL_STYLE}>
            {showGroupInfo ? <GroupInfo group={group}/>: <div/>}
        </Rodal>
        <Rodal visible={!!startEventId}
               onClose={() => {}}
               animation="rotate"
               showCloseButton={false}
               customStyles={{
                   backgroundColor: "#161616",
                   width: 640,
                   height: 360
               }}>
            {startEventId ? <Minigame/> : null}
        </Rodal>
        <Rodal visible={!!showEventResult}
               onClose={hideEventResult}
               animation="slideRight"
               showCloseButton={false}
               customStyles={COMMON_MODAL_STYLE}>
            <EventResult/>
        </Rodal>
        <Rodal visible={!!showStore}
               onClose={hideStore}
               animation="slideRight"
               showCloseButton={false}
               customStyles={COMMON_MODAL_STYLE}>
            <GameStore/>
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
        showGroupInfo: state.showGroupInfo,
        showEventResult: state.showEventResult,
        startEventId: state.startEventId,
        stopEventId: state.stopEventId,
        showStore: state.showStore
    };
}

function mapStateToDispatch(dispatch) {
    return {
        closeEvent: () => dispatch(eventAction.show(null)),
        hideGroupInfo: () => dispatch(showGroupInfo(false)),
        hideEventResult: () => dispatch(showEventResult(false)),
        hideStore: () => dispatch(showStore(false)),
    };
}

export default connect(mapStateToProps, mapStateToDispatch)(App);
