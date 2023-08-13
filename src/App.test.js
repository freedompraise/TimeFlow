import { render } from "@testing-library/react";
import App from "./App";

test("renders App component without errors", () => {
  render(<App />);
  const headerElement = screen.getByText(/TimeFlow/i);
  expect(headerElement).toBeInTheDocument();
});
