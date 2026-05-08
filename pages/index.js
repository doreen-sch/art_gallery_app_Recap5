import Spotlight from "@/components/Spotlight";
import styled from "styled-components";

export default function HomePage({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <div>
      <StyledHeading>Art Gallery</StyledHeading>
      <Spotlight
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
