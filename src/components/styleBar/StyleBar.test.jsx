import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest"; // Import test utilities if globals are off
import { StyleBar } from "./StyleBar";

test("renders all ColourButton components with correct text'", () => {
  render(<StyleBar />);

  expect(screen.getByText("Text Colour")).toBeInTheDocument();
});
