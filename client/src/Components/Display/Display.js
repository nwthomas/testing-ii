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
    </div>
  );
};

export default Display;
