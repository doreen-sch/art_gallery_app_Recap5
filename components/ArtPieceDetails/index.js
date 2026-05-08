import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import ColorPallette from "../ColorPallette/ColorPallette";
import Comments from "../Comments/Comments";
import CommentForm from "../CommentForm/CommentForm";

export default function ArtPieceDetails({
  selectedArtPiece,
  comments,
  onSubmitComment,
}) {
  return (
    <StyledDetailsContainer>
      <nav>
        {" "}
        {/* just navigate to the root or homepage */}
        <Link href="/">← Back to List</Link>
      </nav>
      <figure>
        <Image
          src={selectedArtPiece.imageSource}
          alt={`Artwork titled ${selectedArtPiece.name} by ${selectedArtPiece.artist}`}
          width={800}
          height={600}
          priority
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
      <Comments comments={comments} />
      {/* Note: We pass the slug here so the function in _app.js knows which piece to update */}
      <CommentForm
        onSubmitComment={(text) => onSubmitComment(selectedArtPiece.slug, text)}
      />
    </StyledDetailsContainer>
  );
}

const StyledDetailsContainer = styled.article`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 100px;

  /* This ensures the text and form elements stay aligned together */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

const StyledArtInfoList = styled.ul`
  list-style: none;
`;
