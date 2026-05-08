import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";
import styled from "styled-components";

export default function ArtPiecesPreview({
  image,
  title,
  artist,
  slug,
  isFavorite,
  onToggleFavorite,
}) {
  console.log(title);
  return (
    <StyledFigure $isFavorite={isFavorite}>
      <Link href={`/art-pieces/${slug}`}>
        <Image
          src={image}
          alt={`Artwork titled ${title} by ${artist}`}
          width={500}
          height={500}
          priority
        />
      </Link>
      <StyledFigcaption style={{ padding: "1rem" }}>
        <article>
          <h3>{title}</h3>
          <p>Artist: {artist}</p>
        </article>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      </StyledFigcaption>
    </StyledFigure>
  );
}

const StyledFigure = styled.figure`
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  background-color: ${({ $isFavorite }) => ($isFavorite ? "#fce5e8" : "white")};
  width: 500px;
`;

const StyledFigcaption = styled.figcaption`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
