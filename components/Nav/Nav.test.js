// component rtl template
import React from "react";
import { render, screen } from "@testing-library/react";
import { Nav } from "./Nav";

describe("Nav", () => {
  it("renders without crashing", () => {
    render(<Nav />);
    const nav = screen.getByTestId("nav");
    expect(nav).toBeInTheDocument();
  });
});
