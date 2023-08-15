import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Break from "../components/BreakLength";

test("clicking decrement button reduces break length", () => {
  const setBreakLength = jest.fn();
  render(
    <Break breakLength={5} setBreakLength={setBreakLength} sessionLength={25} />
  );

  const decrementButton = screen.getByTestId("break-decrement");
  fireEvent.click(decrementButton);

  expect(setBreakLength).toHaveBeenCalledWith(4); // Assuming the length decrements by 1
});

test("clicking increment button increases break length", () => {
  const setBreakLength = jest.fn();
  render(
    <Break breakLength={5} setBreakLength={setBreakLength} sessionLength={25} />
  );

  const incrementButton = screen.getByTestId("break-increment");
  fireEvent.click(incrementButton);

  expect(setBreakLength).toHaveBeenCalledWith(6); // Assuming the length increments by 1
});

test("break length does not go above 10 minutes or session length", () => {
  const setBreakLength = jest.fn();
  render(
    <Break breakLength={9} setBreakLength={setBreakLength} sessionLength={25} />
  );

  const incrementButton = screen.getByTestId("break-increment");
  fireEvent.click(incrementButton);

  expect(setBreakLength).toHaveBeenCalledWith(10); // Break length capped at 10
});

test("break length does not go below 1 minute", () => {
  const setBreakLength = jest.fn();
  render(
    <Break breakLength={2} setBreakLength={setBreakLength} sessionLength={25} />
  );

  const decrementButton = screen.getByTestId("break-decrement");
  fireEvent.click(decrementButton);

  expect(setBreakLength).toHaveBeenCalledWith(1); // Break length cannot go below 1
});
