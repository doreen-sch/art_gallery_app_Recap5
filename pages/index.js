import Spotlight from "@/components/Spotlight";

export default function HomePage({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <div>
      <h1>Art Gallery</h1>
      <Spotlight
        pieces={pieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}
