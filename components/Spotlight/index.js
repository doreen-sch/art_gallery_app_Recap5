import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton";
import { useState } from "react";

function getRandomArtPiece(artworks) {
  if (!artworks || artworks.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * artworks.length);
  return artworks[randomIndex];
}

export default function Spotlight({ pieces, artPiecesInfo, onToggleFavorite }) {
  // console.log("kunst", pieces);
  const [spotlightPiece] = useState(() => getRandomArtPiece(pieces));

  if (!spotlightPiece) return <p>Loading ...</p>;

  const spotlightInfo = artPiecesInfo?.find(
    (p) => p.slug === spotlightPiece.slug
  );
  const isFavorite = spotlightInfo?.isFavorite ?? false;

  return (
    <section>
      <StyledSpotlight $isFavorite={isFavorite}>
        <Image
          src={spotlightPiece.imageSource}
          alt={`Artwork titled ${spotlightPiece.title} by ${spotlightPiece.artist}`}
          width={500}
          height={500}
          priority
        />
        <StyledSpotlightCaption>
          <p>{spotlightPiece.artist}</p>
          <FavoriteButton
            isFavorite={isFavorite}
            onToggleFavorite={() => onToggleFavorite(spotlightPiece.slug)}
          />
        </StyledSpotlightCaption>
      </StyledSpotlight>
    </section>
  );
}

const StyledSpotlight = styled.article`
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  background-color: ${({ $isFavorite }) => ($isFavorite ? "#fce5e8" : "white")};
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  font-size: 1rem;
  color: #0e2e2a;
`;

const StyledSpotlightCaption = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;
