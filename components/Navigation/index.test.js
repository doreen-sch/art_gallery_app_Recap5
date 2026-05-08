import { render, screen } from "@testing-library/react";
import Navigation from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: "/" };
  },
}));

describe("Navigation", () => {
  it("renders Spotlight-Link", () => {
    render(<Navigation />);
    expect(screen.getByText("Spotlight")).toBeInTheDocument();
  });

  it("renders Gallery-Link", () => {
    render(<Navigation />);
    expect(screen.getByText("Gallery")).toBeInTheDocument();
  });
});
