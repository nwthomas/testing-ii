import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  it("should render strike, ball, foul, and hit buttons to the screen", () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText(/strike/i)).toBeInTheDocument();
    expect(getByText(/ball/i)).toBeInTheDocument();
    expect(getByText(/foul/i)).toBeInTheDocument();
    expect(getByText(/hit/i)).toBeInTheDocument();
  });
});
