import ArtPieces from "@/components/ArtPieces";

export default function HomePage({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <div>
      <h1>Art Gallery</h1>
      <ArtPieces 
      pieces={pieces} 
      artPiecesInfo={artPiecesInfo} 
      onToggleFavorite={onToggleFavorite} 
    />
    </div>
  );
}
