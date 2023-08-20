import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

jest.mock("../assets/sounds/sound.mp3", () => ""); //nock the sound file import

test("renders App component without errors", () => {
  render(<App />);
  const headerElement = screen.getByText(/TimeFlow/i);
  expect(headerElement).toBeInTheDocument();
});

test("renders the Session Component", () => {
  render(<App />);
  const sessionElement = screen.getByText(/Session Length/i);
  expect(sessionElement).toBeInTheDocument();
});

test("renders the Break component", () => {
  render(<App />);
  const breakElement = screen.getByText(/Break Length/i);
  expect(breakElement).toBeInTheDocument();
});

test("renders the Timer component", () => {
  render(<App />);
  const timerElement = screen.getByText(/Start/);
  expect(timerElement).toBeInTheDocument();
});

test("renders the footer", () => {
  render(<App />);
  const footerElement = screen.getByText(/built by/i);
  expect(footerElement).toBeInTheDocument();
});

test("renders the task list", () => {
  render(<App />);
  const taskListElement = screen.getByText(/Task List/i);
  expect(taskListElement).toBeInTheDocument();
});
