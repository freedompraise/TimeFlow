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
jest.useFakeTimers();

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
    expect(timerDisplay).toHaveTextContent("25:00");
  });

  test("start and stop timer", async () => {
    render(
      <Timer
        sessionLength={25}
        isTimerRunning={false}
        setIsTimerRunning={() => {}}
        setBreakLength={() => {}}
      />
    );
    const startStopButton = screen.getByTestId("start_stop-button");
    act(() => {
      fireEvent.click(startStopButton);
    });
    await act(async () => {
      fireEvent.click(startStopButton);
    });
    expect(startStopButton).toHaveTextContent("Start");
  });

  test("reset timer after running and returning to initial session length", async () => {
    // Mock props
    const mockSessionLength = 25; // or any desired session length
    const mockIsTimerRunning = true; // or false based on your test case
    const mockSetIsTimerRunning = jest.fn(); // create a mock function
    // Render the Timer component with mocked props
    render(
      <Timer
        sessionLength={mockSessionLength}
        isTimerRunning={mockIsTimerRunning}
        setIsTimerRunning={mockSetIsTimerRunning}
      />
    );
    // Click the start/stop button to start the timer
    const startStopButton = screen.getByTestId("start_stop-button");
    fireEvent.click(startStopButton);
    setTimeout(() => {
      // Reset the timer
      const resetButton = screen.getByTestId("reset-button");
      fireEvent.click(resetButton);

      // Assert that the timer values have been reset
      expect(screen.getByTestId("time-left")).toHaveTextContent(
        "25:00" // Assuming session length is 25 minutes
      );
      expect(screen.getByTestId("start_stop-button")).toHaveTextContent(
        "Start"
      );
      // Ensure that the setIsTimerRunning mock function was called with false
      expect(mockSetIsTimerRunning).toHaveBeenCalledWith(false);
    }, 1000); // Adjust the timeout value based on your implementation
  });
});
