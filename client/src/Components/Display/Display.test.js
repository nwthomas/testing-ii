import React from "react";
import { cleanup, render } from "react-testing-library";
import "jest-dom/extend-expect";

import Display from "./Display";

afterEach(cleanup); // Equivalent to componentWillUnmount for this testing library

describe("<Display />", () => {
  it("should display the count of strikes, balls, and outs", () => {
    const { getByTestId } = render(<Display stateOnProps={{ strikes: 0 }} />);
    const strikes = getByTestId("strikes");
    expect(strikes.textContent).toBe("0"); // Testing initial 0 status from stateOnProps
  });
  it("should display the count of balls", () => {
    const { getByTestId } = render(<Display stateOnProps={{ balls: 0 }} />);
    const balls = getByTestId("balls");
    expect(balls.textContent).toBe("0");
  });
  it("should display the count of outs", () => {
    const { getByTestId } = render(<Display stateOnProps={{ outs: 0 }} />);
    const outs = getByTestId("outs");
    expect(outs.textContent).toBe("0");
  });
});
