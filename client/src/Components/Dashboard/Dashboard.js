import React from "react";

import { Display } from "../Display";

class Dashboard extends React.Component {
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
      <div>
        <Display stateOnProps={this.state} />
        <div>
          <button
            onClick={this.strike}
            name="Strike"
            data-testid="strikeBtn"
            type="button"
          >
            Strike
          </button>
          <button
            onClick={this.ball}
            name="Ball"
            data-testid="ballBtn"
            type="button"
          >
            Ball
          </button>
          <button
            onClick={this.strike}
            name="Foul"
            data-testid="foulBtn"
            type="button"
          >
            Foul
          </button>
          <button
            onClick={this.hit}
            name="Hit"
            data-testid="hitBtn"
            type="button"
          >
            Hit
          </button>
        </div>
      </div>
    );
  }
}

export default Dashboard;
