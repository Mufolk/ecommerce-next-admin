import { render, screen } from "@testing-library/react";
import { useSession } from "next-auth/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(),
}));

describe("Home", () => {
  it("renders a heading", () => {
    // Mock the session
    useSession.mockReturnValue({ data: null });
    render(<Home />);

    const button = screen.getByText("Login with Google");

    expect(button).toBeInTheDocument();
  });
});
