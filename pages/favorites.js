import ArtPieces from "@/components/ArtPieces";

export default function FavoritesPage({ pieces, artPiecesInfo, onToggleFavorite }) {
  // To filter the only pieces that are marked as favorite
  const favoritePieces = pieces?.filter((piece) => {
    return artPiecesInfo?.find((info) => info.slug === piece.slug)?.isFavorite;
  });

  return (
     <>
      <h1>My Favorites</h1>
      {favoritePieces?.length > 0 ? (
        <ArtPieces
          pieces={favoritePieces} 
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={onToggleFavorite}
        />
      ) : (
        <p>No favorites saved yet.Go to the gallery and click some hearts to make it as favourite!</p>
      )}
    </>
  );
}
