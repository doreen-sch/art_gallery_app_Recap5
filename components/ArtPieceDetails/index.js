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
        <StyledBackLink href="/">← All Art Pieces</StyledBackLink>
      </nav>
      <StyledFigure>
        <Image
          src={selectedArtPiece.imageSource}
          alt={`Artwork titled ${selectedArtPiece.name} by ${selectedArtPiece.artist}`}
          width={800}
          height={600}
          priority
        />
        <ColorPallette selectedArtPiece={selectedArtPiece} />
        <StyledFigcaption>
          <h1>{selectedArtPiece.name}</h1>
          <p>Artist: {selectedArtPiece.artist}</p>
        </StyledFigcaption>
      </StyledFigure>

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

const StyledBackLink = styled(Link)`
  margin: 3rem 0 0 2rem;
  text-decoration: none;
`;

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

const StyledDetailsContainer = styled.article`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 100px;
  font-size: 1rem;
  color: #0e2e2a;

  /* This ensures the text and form elements stay aligned together */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

const StyledArtInfoList = styled.ul`
  list-style: none;
`;
