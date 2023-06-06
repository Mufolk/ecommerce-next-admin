// component rtl template
import React from "react";
import { render, screen } from "@testing-library/react";
import { Layout } from "./Layout";

describe("Layout", () => {
  it("renders without crashing", () => {
    render(<Layout />);
    const layout = screen.getByTestId("layout");
    expect(layout).toBeInTheDocument();
  });
});
