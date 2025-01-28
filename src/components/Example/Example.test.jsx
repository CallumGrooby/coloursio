import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest"; // Import test utilities if globals are off
import Example from "./Example";

test("renders example component", () => {
  render(<Example />);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});
