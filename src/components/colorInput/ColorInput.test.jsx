import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { ColorInput } from "./colorInput";

test("renders ColorInput with default state", () => {
  render(<ColorInput text={"Test"} defaultColor="#aabbcc" />);
  const input = screen.getByDisplayValue("#aabbcc");
  expect(input).toBeInTheDocument();
  expect(input).toHaveStyle({ backgroundColor: "#aabbcc" });
});

test("toggles color picker and calls onChange with the selected color", async () => {
  const handleChange = vi.fn(); // Use `vi.fn()` for mocking functions in Vitest

  render(<ColorInput text="Test" onChange={handleChange} />);

  // Find the input element
  const input = screen.getByRole("textbox");

  // Simulate clicking the input to open the color picker
  await userEvent.click(input);

  // Assert that the color picker is visible (if this is part of your component's behavior)
  expect(screen.getByText(/Colour/i)).toBeInTheDocument();

  // Simulate typing a new color in the input field
  const newColor = "#123456";
  await userEvent.clear(input); // Clear the input before typing
  await userEvent.type(input, newColor); // Type the new color

  // Assert that `onChange` was called with the correct color value
  expect(handleChange).toHaveBeenCalledWith(newColor);
});
