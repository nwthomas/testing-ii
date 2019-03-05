import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import Display from "./Display";

describe("<Display />", () => {
  it("should display the count of strikes for an at-bat", () => {
    const { getByTestId, rerender } = render(
      <Display stateOnProps={{ strikes: 0 }} />
    );
    const strikes = getByTestId("strikes");
    expect(strikes.textContent).toBe("0"); // Testing initial 0 status from stateOnProps

    rerender(<Display stateOnProps={{ strikes: 1 }} />);
    expect(strikes.textContent).toBe("1"); // Testing update of 1 from stateOnProps

    rerender(<Display stateOnProps={{ strikes: 2 }} />);
    expect(strikes.textContent).toBe("2");
  });
});
