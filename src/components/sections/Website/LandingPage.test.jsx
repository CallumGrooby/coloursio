// import { render, screen, fireEvent } from "@testing-library/react";
// import { describe, it, expect, vi } from "vitest";
// import { Website } from "./LandingPage";

// // Mock hooks
// vi.mock("../hooks/useHeaderStyle", () => ({
//   useHeaderStyle: () => ({ headerStyle: {} }),
// }));

// vi.mock("../hooks/useBodyStyle", () => ({
//   useBodyStyle: () => ({ bodyStyle: {} }),
// }));

// vi.mock("../hooks/useColors", () => ({
//   useColors: () => ({
//     colorStyle: { text: "#000", background: "#fff", primary: "#ff0000" },
//   }),
// }));

// describe("Website Component", () => {
//   it("renders correctly", () => {
//     render(<Website currentView={true} />);
//     expect(screen.getByText(/Visualize Stunning/i)).toBeInTheDocument();
//   });

//   it("toggles between mobile and desktop views", () => {
//     render(<Website currentView={false} />);
//     const button = screen.getByRole("button", { name: /Desktop/i });
//     expect(button).toBeInTheDocument();
//   });
// });

// describe("Visibility Toggle", () => {
//   it("hides and shows section on button click", () => {
//     const { rerender } = render(<Website currentView={true} />);

//     const toggleButton = screen.getByText(/Full Screen Section 2/i);
//     fireEvent.click(toggleButton);

//     rerender(<Website currentView={false} />);
//     expect(screen.getByText(/Mobile/i)).toBeInTheDocument();
//   });
// });
