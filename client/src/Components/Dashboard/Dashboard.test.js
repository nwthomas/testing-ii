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
  it("should increment the display of the number of strikes on screen when the strikes button is pressed", () => {
    const { getByTestId } = render(<Dashboard />);
    const strikeButton = getByTestId("strikeBtn");
    fireEvent.click(strikeButton);
    expect(getByTestId("strikes").textContent).toEqual("1");
    fireEvent.click(strikeButton);
    expect(getByTestId("strikes").textContent).toEqual("2");
    fireEvent.click(strikeButton);
    expect(getByTestId("strikes").textContent).toEqual("0");
  });
  it("should increment the display of the number of balls on screen when the balls button is pressed", () => {
    const { getByTestId } = render(<Dashboard />);
    const ballButton = getByTestId("ballBtn");
    fireEvent.click(ballButton);
    expect(getByTestId("balls").textContent).toEqual("1");
    fireEvent.click(ballButton);
    expect(getByTestId("balls").textContent).toEqual("2");
    fireEvent.click(ballButton);
    expect(getByTestId("balls").textContent).toEqual("3");
    fireEvent.click(ballButton);
    expect(getByTestId("balls").textContent).toEqual("0");
  });
  it("should increment the display of the number of strikes on screen when the foul button is pressed", () => {
    const { getByTestId } = render(<Dashboard />);
    const foulButton = getByTestId("foulBtn");
    fireEvent.click(foulButton);
    expect(getByTestId("strikes").textContent).toEqual("1");
    fireEvent.click(foulButton);
    expect(getByTestId("strikes").textContent).toEqual("2");
    fireEvent.click(foulButton);
    expect(getByTestId("strikes").textContent).toEqual("2");
  });
  it("should reset the display of the number of strikes and balls on screen when the hit button is pressed", () => {
    const { getByTestId } = render(<Dashboard />);
    const hitButton = getByTestId("hitBtn");
    fireEvent.click(hitButton);
    expect(getByTestId("strikes").textContent).toEqual("0");
    expect(getByTestId("balls").textContent).toEqual("0");
  });
});
