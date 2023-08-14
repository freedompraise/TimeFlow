import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Session from "..components/SessionLength";

test("clicking decrement button reduces session length", () => {
  render(<Session />);

  const decrementButton = screen.getByTestId("session-decrement");
  fireEvent.click(decrementButton);

  const sessionLengthElement = screen.getByTestId("session-length");
  expect(sessionLengthElement).toHaveTextContent("24"); // Assuming the length decrements by 1
});

test("clicking increment button increases session length", () => {
  render(<Session />);

  const incrementButton = screen.getByTestId("session-increment");
  fireEvent.click(incrementButton);

  const sessionLengthElement = screen.getByTestId("session-length");
  expect(sessionLengthElement).toHaveTextContent("26"); // Assuming the length increments by 1
});
