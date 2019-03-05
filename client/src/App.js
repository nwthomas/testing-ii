import React, { Component } from "react";

import { Dashboard } from "./Components/Dashboard";
import { Display } from "./Components/Display";

class App extends Component {
  state = {
    strikes: 0,
    balls: 0,
    outs: 0
  };
  strike = e => {
    e.preventDefault();
    console.log(this.state);
    if (e.target.name === "Foul" && this.state.strikes === 2) return;
    if (this.state.strikes === 2) {
      this.setState(prevState => ({
        ...this.state,
        strikes: 0,
        outs: prevState.outs + 1
      }));
    } else {
      this.setState(prevState => ({
        ...this.state,
        strikes: prevState.strikes + 1
      }));
    }
  };
  ball = e => {
    e.preventDefault();
    if (this.state.balls === 3) {
      this.setState({
        ...this.state,
        balls: 0,
        strikes: 0
      });
    } else {
      this.setState(prevState => ({
        ...this.state,
        balls: prevState.balls + 1
      }));
    }
  };
  hit = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      strikes: 0,
      balls: 0
    });
  };
  render() {
    return (
      <div className="App">
        <Display stateOnProps={this.state} />
        <Dashboard strike={this.strike} ball={this.ball} hit={this.hit} />
      </div>
    );
  }
}

export default App;
