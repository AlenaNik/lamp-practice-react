import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Lamp from "./Lamp";

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Lamp app</h1>
          </header>
            <Lamp on />
            <Lamp />
        </div>
    );
  }
}

export default App;