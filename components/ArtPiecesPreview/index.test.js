import { render, screen } from "@testing-library/react";
import ArtPiecesPreview from "./index";

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children }) => children,
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ alt }) => <img alt={alt} />,
}));

const mockPiece = {
  slug: "test-piece",
  image: "/test.jpg",
  title: "Test Art",
  artist: "Test Artist",
  isFavorite: false,
};

describe("ArtPiecesPreview", () => {
  it("renders title and artist", () => {
    render(
      <ArtPiecesPreview
        slug={mockPiece.slug}
        image={mockPiece.image}
        title={mockPiece.title}
        artist={mockPiece.artist}
        isFavorite={mockPiece.isFavorite}
        onToggleFavorite={() => {}}
      />
    );
    expect(screen.getByText("Test Art")).toBeInTheDocument();
    expect(screen.getByText("Artist: Test Artist")).toBeInTheDocument();
  });
});
