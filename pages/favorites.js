import ArtPieces from "@/components/ArtPieces";
import Heading from "@/components/Header";
import styled from "styled-components";

export default function FavoritesPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  // To filter the only pieces that are marked as favorite
  const favoritePieces = pieces?.filter((piece) => {
    return artPiecesInfo?.find((info) => info.slug === piece.slug)?.isFavorite;
  });

  return (
    <>
      <Heading />
      {favoritePieces?.length > 0 ? (
        <ArtPieces
          pieces={favoritePieces}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={onToggleFavorite}
        />
      ) : (
        <p>
          No favorites saved yet.Go to the gallery and click some hearts to make
          it as favourite!
        </p>
      )}
    </>
  );
}
