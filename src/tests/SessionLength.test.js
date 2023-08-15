import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Session from "../components/SessionLength";

test("clicking decrement button reduces session length", () => {
  const sessionLength = 25;
  const setSessionLength = jest.fn();
  const isTimerRunning = false;

  render(
    <Session
      sessionLength={sessionLength}
      setSessionLength={setSessionLength}
      isTimerRunning={isTimerRunning}
    />
  );

  const decrementButton = screen.getByTestId("session-decrement");
  fireEvent.click(decrementButton);

  expect(setSessionLength).toHaveBeenCalledWith(sessionLength - 1);
});

test("clicking increment button increases session length", () => {
  const sessionLength = 25;
  const setSessionLength = jest.fn();
  const isTimerRunning = false;

  render(
    <Session
      sessionLength={sessionLength}
      setSessionLength={setSessionLength}
      isTimerRunning={isTimerRunning}
    />
  );

  const incrementButton = screen.getByTestId("session-increment");
  fireEvent.click(incrementButton);

  expect(setSessionLength).toHaveBeenCalledWith(sessionLength + 1);
});

test("clicking decrement button while timer is running does not change session length", () => {
  const sessionLength = 25;
  const setSessionLength = jest.fn();
  const isTimerRunning = true;

  render(
    <Session
      sessionLength={sessionLength}
      setSessionLength={setSessionLength}
      isTimerRunning={isTimerRunning}
    />
  );

  const decrementButton = screen.getByTestId("session-decrement");
  fireEvent.click(decrementButton);

  expect(setSessionLength).not.toHaveBeenCalled();
});

test("clicking increment button while timer is running does not change session length", () => {
  const sessionLength = 25;
  const setSessionLength = jest.fn();
  const isTimerRunning = true;

  render(
    <Session
      sessionLength={sessionLength}
      setSessionLength={setSessionLength}
      isTimerRunning={isTimerRunning}
    />
  );

  const incrementButton = screen.getByTestId("session-increment");
  fireEvent.click(incrementButton);

  expect(setSessionLength).not.toHaveBeenCalled();
});
