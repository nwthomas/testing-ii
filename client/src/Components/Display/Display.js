import React from "react";

const Display = props => {
  return (
    <div>
      <p>Strikes</p>
      <p data-testid="strikes">{props.stateOnProps.strikes}</p>
      <p>Balls</p>
      <p data-testid="balls">{props.stateOnProps.balls}</p>
      <p>Outs</p>
      <p data-testid="outs">{props.stateOnProps.outs}</p>
      <div>
        <p>First Base</p>
        <p data-testid="firstBase">{props.stateOnProps.firstBase}</p>
        <p>Second Base</p>
        <p data-testid="secondBase">{props.stateOnProps.secondBase}</p>
        <p>Third Base</p>
        <p data-testid="thirdBase">{props.stateOnProps.thirdBase}</p>
        <p>Score</p>
        <p data-testid="scoreBase">{props.stateOnProps.score}</p>
      </div>
    </div>
  );
};

export default Display;
