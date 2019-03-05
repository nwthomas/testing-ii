import React from "react";

const Dashboard = props => {
  return (
    <div>
      <div>
        <button onClick={props.strike} name="Strike" type="button">
          Strike
        </button>
        <button onClick={props.ball} name="Ball" type="button">
          Ball
        </button>
        <button onClick={props.strike} name="Foul" type="button">
          Foul
        </button>
        <button onClick={props.hit} name="Hit" type="button">
          Hit
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
