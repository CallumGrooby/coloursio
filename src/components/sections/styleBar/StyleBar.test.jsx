import { render, screen } from "@testing-library/react";
import { test, expect, vi } from "vitest"; // Import test utilities if globals are off
import { StyleBar } from "./StyleBar";
import { HeaderStyleProvider } from "../../../utils/HeaderStyleContext";
import { BodyStyleProvider } from "../../utils/BodyStyleContext";

test("renders all ColorButton components with correct text'", () => {
  render(
    <BodyStyleProvider>
      <HeaderStyleProvider>
        <StyleBar />
      </HeaderStyleProvider>
    </BodyStyleProvider>
  );

  expect(screen.getByText("Text Color")).toBeInTheDocument();
  expect(screen.getByText("headings")).toBeInTheDocument();
  expect(screen.getByText("body")).toBeInTheDocument();
  expect(screen.getByText("Text Color")).toBeInTheDocument();
  expect(screen.getByText("Background Color")).toBeInTheDocument();
  expect(screen.getByText("Primary Color")).toBeInTheDocument();
  expect(screen.getByText("Secondary Color")).toBeInTheDocument();
  expect(screen.getByText("Accent Color")).toBeInTheDocument();
});
