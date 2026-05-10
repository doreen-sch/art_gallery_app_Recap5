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
        <StyledParagraph>
          No favorites saved yet. Explore the Art Gallery and tap ❤️ to add your
          favorite pieces.
        </StyledParagraph>
      )}
    </>
  );
}

const StyledParagraph = styled.p`
  justify-self: center;
  font-size: 1rem;
  line-height: 1.6;
  margin: 2rem 3rem;
  color: #0e2e2a;
`;
