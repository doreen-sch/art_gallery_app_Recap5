import { render, screen } from "@testing-library/react";
import Spotlight from "./index";

const mockPieces = [
  {
    slug: "test-piece",
    imageSource: "/test.jpg",
    name: "Test Art",
    artist: "Test Artist",
  },
];

describe("Spotlight", () => {
  it("renders Spotlight", () => {
    render(<Spotlight pieces={mockPieces} />);
    expect(screen.getByText("Test Artist")).toBeInTheDocument();
  });
});
