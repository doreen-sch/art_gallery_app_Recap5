import styled from "styled-components";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <StyledButton
      onClick={onToggleFavorite}
      aria-label="favorite-button"
      // style={{ backgroundColor: isFavorite ? "coral" : "white" }}
    >
      {isFavorite ? "❤️" : "🩶"}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  border: none;
  font-size: 1.5rem;
  background-color: transparent;
  cursor: pointer;
`;
