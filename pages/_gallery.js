import ArtPieces from "@/components/ArtPieces";

export default function Gallery({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <div>
      <h1>Gallery</h1>
      <ArtPieces
        pieces={pieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}
