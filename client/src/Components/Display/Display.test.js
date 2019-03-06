import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import Display from "./Display";
import { Dashboard } from "../Dashboard";

describe("<Display />", () => {
  it("should display the count of strikes, balls, and outs", () => {
    const { getByTestId, rerender } = render(
      <Display stateOnProps={{ strikes: 0, balls: 0, outs: 0 }} />
    );
    const strikes = getByTestId("strikes");
    const balls = getByTestId("balls");
    const outs = getByTestId("outs");
    expect(strikes.textContent).toBe("0"); // Testing initial 0 status from stateOnProps
    expect(balls.textContent).toBe("0");
    expect(outs.textContent).toBe("0");
  });
});
