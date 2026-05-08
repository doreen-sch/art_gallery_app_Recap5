import styled from "styled-components";

export default function ColorPallette({ selectedArtPiece }) {
  const colors = selectedArtPiece.colors;
  console.log("colors", colors);
  return (
    <StyledColorSection>
      {colors.map((color) => (
        <div key={color} />
      ))}
    </StyledColorSection>
  );
}

const StyledColorSection = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  width: "40px";
  height: "40px";
  background-color: color;
`;
