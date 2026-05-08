import { render, screen } from "@testing-library/react";
import FavoriteButton from "./index";

describe("FavoriteButton", () => {
  it("renders grey heart if not favorised", () => {
    render(<FavoriteButton isFavorite={false} onToggleFavorite={() => {}} />);
    expect(screen.getByText("🩶")).toBeInTheDocument();
  });

  it("renders red heart if favorised", () => {
    render(<FavoriteButton isFavorite={true} onToggleFavorite={() => {}} />);
    expect(screen.getByText("❤️")).toBeInTheDocument();
  });
});
