import { render, screen } from "@testing-library/react";
import { test, expect, vi } from "vitest"; // Import test utilities if globals are off
import { StyleBar } from "./StyleBar";
import { HeaderStyleProvider } from "../../utils/HeaderStyleContext";
import { BodyStyleProvider } from "../../utils/BodyStyleContext";

test("renders all ColourButton components with correct text'", () => {
  render(
    <BodyStyleProvider>
      <HeaderStyleProvider>
        <StyleBar />
      </HeaderStyleProvider>
    </BodyStyleProvider>
  );

  expect(screen.getByText("Text Colour")).toBeInTheDocument();
  expect(screen.getByText("headings")).toBeInTheDocument();
  expect(screen.getByText("body")).toBeInTheDocument();
  expect(screen.getByText("Text Colour")).toBeInTheDocument();
  expect(screen.getByText("Background Colour")).toBeInTheDocument();
  expect(screen.getByText("Primary Colour")).toBeInTheDocument();
  expect(screen.getByText("Secondary Colour")).toBeInTheDocument();
  expect(screen.getByText("Accent Colour")).toBeInTheDocument();
});
