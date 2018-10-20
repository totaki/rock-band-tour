import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChoiceGroup from './containers/ChoiceGroup';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ChoiceGroup/>
      </div>
    );
  }
}

export default App;
