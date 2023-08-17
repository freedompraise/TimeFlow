// Import the testing library and the timer component
import React from "react";
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import Timer from "../components/Timer";

jest.mock("../components/Sound", () => () => null);

// Define a helper function to advance the timer by a given number of seconds
const advanceTimer = (seconds) => {
  jest.advanceTimersByTime(seconds * 1000);
};

const secondsToMilliseconds = (seconds) => {
  return seconds * 1000;
};
// use a fake timer to control the time
jest.useFakeTimers();

// Testing Timer Logic
describe("Testing Timer Logic", () => {
  // Test if the timer decrements correctly after starting
  test("timer decrements after starting", async () => {
    // Render the timer component with some initial props
    render(
      <Timer
        isTimerRunning={false}
        sessionLength={1}
        breakLength={1}
        setIsTimerRunning={() => {}}
        setBreakLength={() => {}}
      />
    );

    // Get the start/stop button and the time left element
    const startStopButton = screen.getByTestId("start_stop-button");
    const timeLeft = screen.getByTestId("time-left");

    // Expect the time left to be 01:00 initially
    expect(timeLeft).toHaveTextContent("01:00");

    // Click the start/stop button to start the timer
    fireEvent.click(startStopButton);

    // Advance the timer by 10 seconds
    act(() => {
      advanceTimer(secondsToMilliseconds(1000));
    });
    expect(timeLeft).toHaveTextContent("00:50");
  });
});
