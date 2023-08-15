import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Break from "../components/BreakLength";

test("clicking decrement button reduces break length", () => {
  const setBreakLengthMock = jest.fn(); // Create a mock function

  render(<Break breakLength={5} setBreakLength={setBreakLengthMock} />);

  const decrementButton = screen.getByTestId("break-decrement");
  fireEvent.click(decrementButton);

  expect(setBreakLengthMock).toHaveBeenCalledWith(4); // Ensure the mock function was called with the correct value
});

test("clicking increment button increases break length", () => {
  const setBreakLengthMock = jest.fn(); // Create a mock function

  render(<Break breakLength={5} setBreakLength={setBreakLengthMock} />);

  const incrementButton = screen.getByTestId("break-increment");
  fireEvent.click(incrementButton);

  expect(setBreakLengthMock).toHaveBeenCalledWith(6); // Ensure the mock function was called with the correct value
});
