import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Timer from "../components/Timer";

// Mock the Sound component
jest.mock("../components/Sound", () => () => null);

describe("Timer Component", () => {
  test("initial timer display", () => {
    render(
      <Timer
        sessionLength={25}
        isTimerRunning={false}
        setIsTimerRunning={() => {}}
        setBreakLength={() => {}}
      />
    );

    const timerDisplay = screen.getByTestId("time-left");
    const startStopButton = screen.getByTestId("start_stop-button");
    const resetButton = screen.getByTestId("reset-button");

    expect(timerDisplay).toHaveTextContent("25:00");
    expect(startStopButton).toHaveTextContent("Start");
    expect(resetButton).toHaveTextContent("Reset");
  });

  test("start and stop timer", () => {
    render(
      <Timer
        sessionLength={25}
        isTimerRunning={false}
        setIsTimerRunning={() => {}}
        setBreakLength={() => {}}
      />
    );

    const startStopButton = screen.getByTestId("start_stop-button");

    fireEvent.click(startStopButton);
    expect(startStopButton).toHaveTextContent("Stop");

    fireEvent.click(startStopButton);
    expect(startStopButton).toHaveTextContent("Start");
  });

  test("reset timer", () => {
    render(
      <Timer
        sessionLength={25}
        isTimerRunning={false}
        setIsTimerRunning={() => {}}
        setBreakLength={() => {}}
      />
    );

    const startStopButton = screen.getByTestId("start_stop-button");
    const resetButton = screen.getByTestId("reset-button");

    fireEvent.click(startStopButton);
    fireEvent.click(resetButton);

    const timerDisplay = screen.getByTestId("time-left");
    expect(timerDisplay).toHaveTextContent("25:00");
    expect(startStopButton).toHaveTextContent("Start");
  });

  // add more tests for the timer behavior, like checking if the time decrements correctly, if the timer switches between session and break mode, etc.
});
