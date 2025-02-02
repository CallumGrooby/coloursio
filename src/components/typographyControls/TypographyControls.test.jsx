import { render, screen } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { TypographyControls } from "./TypographyControls";

test("calls onValueChange for all style properties", async () => {
  const handleChange = vi.fn();
  const mockStyle = {
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "1.5",
    letterSpacing: "0.02em",
  }; // Initial style

  render(
    <TypographyControls
      heading="Test"
      onValueChange={handleChange}
      style={mockStyle}
    />
  );

  const user = userEvent.setup();

  // List of style properties to test
  const styleProperties = [
    "fontSize",
    "fontWeight",
    "lineHeight",
    "letterSpacing",
  ];

  // Loop over each style property and test
  for (const property of styleProperties) {
    const input = screen.getByLabelText(property); // Find the input by the label (the property name)
    await user.clear(input); // Clear input before typing
    await user.type(input, "20"); // Simulate user typing "20"

    // Verify the onValueChange was called with the correct value
    expect(handleChange).toHaveBeenLastCalledWith(property, "20");
  }
});
