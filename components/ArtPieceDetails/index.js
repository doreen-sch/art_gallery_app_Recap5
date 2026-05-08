import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import ColorPallette from "../ColorPallette/ColorPallette";

export default function ArtPieceDetails({ selectedArtPiece }) {
  return (
    <article>
      <nav>
        <Link href="/">
          {" "}
          {/* just navigate to the root or homepage */}
          <button type="button">← Back to List</button>
        </Link>
      </nav>
      <figure>
        <Image
          src={selectedArtPiece.imageSource}
          alt={`Artwork titled ${selectedArtPiece.name} by ${selectedArtPiece.artist}`}
          width={800}
          height={600}
        />
        <ColorPallette selectedArtPiece={selectedArtPiece} />
        <figcaption>
          <h1>{selectedArtPiece.name}</h1>
          <p>Artist: {selectedArtPiece.artist}</p>
        </figcaption>
      </figure>

      <StyledArtInfoList>
        <li>
          <strong>Year:</strong> {selectedArtPiece.year}
        </li>
        <li>
          <strong>Genre:</strong> {selectedArtPiece.genre}
        </li>
      </StyledArtInfoList>
    </article>
  );
}

const StyledArtInfoList = styled.ul`
  list-style: none;
`;
