import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";
import { Display } from "../Display";

describe("<Dashboard />", () => {
  it("should render strike, ball, foul, and hit buttons to the screen", () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText(/strike/i)).toBeInTheDocument();
    expect(getByText(/ball/i)).toBeInTheDocument();
    expect(getByText(/foul/i)).toBeInTheDocument();
    expect(getByText(/hit/i)).toBeInTheDocument();
  });
  // it("should increment the display of number strikes on screen when the button is pressed", () => {
  //   const mockCallback = jest.fn();
  //   const { getByTestId } = render(<Dashboard strike={mockCallback} />);
  //   const strikeButton = getByTestId("strike");
  //   fireEvent.click(strikeButton);
  //   expect(mockCallback.mock.calls.length).toEqual(1);
  // });
});
