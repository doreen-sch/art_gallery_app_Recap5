import styled from "styled-components";

export default function ColorPallette({ selectedArtPiece }) {
  const colors = selectedArtPiece.colors;
  return (
    <StyledColorSection>
      {colors.map((color) => (
        <div
          key={color}
          style={{ width: "40px", height: "40px", backgroundColor: color }}
        />
      ))}
    </StyledColorSection>
  );
}

const StyledColorSection = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`;
