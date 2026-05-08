import ArtPieces from "@/components/ArtPieces";
import styled from "styled-components";

export default function Gallery({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <div>
      {" "}
      <StyledHeading>Gallery</StyledHeading>
      <ArtPieces
        pieces={pieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}

const StyledHeading = styled.h1`
  text-align: center;
  color: #333333;
`;
