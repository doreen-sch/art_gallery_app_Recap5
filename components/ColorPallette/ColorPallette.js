import styled from "styled-components";

export default function ColorPallette({ selectedArtPiece }) {
  const colors = selectedArtPiece.colors;
  return (
    <StyledColorSection>
      {colors.map((color) => (
        <ColorBox key={color} color={color} />
      ))}
    </StyledColorSection>
  );
}

const StyledColorSection = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  margin-left: 1rem;
  gap: 15px;
`;

const ColorBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;
