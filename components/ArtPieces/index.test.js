import { render, screen } from "@testing-library/react";
import ArtPieces from "./index";

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children }) => children,
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ alt }) => <img alt={alt} />,
}));

const mockPieces = [
  {
    slug: "test-piece-1",
    imageSource: "/test1.jpg",
    name: "Test Art 1",
    artist: "Test Artist 1",
  },
  {
    slug: "test-piece-2",
    imageSource: "/test2.jpg",
    name: "Test Art 2",
    artist: "Test Artist 2",
  },
];

describe("ArtPieces", () => {
  it("renders all art pieces", () => {
    render(
      <ArtPieces
        pieces={mockPieces}
        artPiecesInfo={[]}
        onToggleFavorite={() => {}}
      />
    );
    expect(screen.getByText("Test Art 1")).toBeInTheDocument();
    expect(screen.getByText("Test Art 2")).toBeInTheDocument();
  });

  it("renders loading state when no pieces", () => {
    render(<ArtPieces artPiecesInfo={[]} onToggleFavorite={() => {}} />);
    expect(screen.getByText("Loading artworks...")).toBeInTheDocument();
  });
});
