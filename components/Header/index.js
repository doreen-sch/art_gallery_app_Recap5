import styled from "styled-components";
import Image from "next/image";

export default function Header() {
  return (
    <StyledHeader className="headline">
      <StyledHeading>Art Gallery</StyledHeading>
      <StyledButton type="button" aria-label="shell icon for profile settings">
        <Image src="/images/shell.png" alt="Icon" width={30} height={30} />
      </StyledButton>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 2rem;
  max-width: 700px;
  top: 20px;
  left: 50%;
`;

const StyledHeading = styled.h1`
  justify-content: center;
  color: #0e2e2a;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const StyledButton = styled.button`
  background-color: lightgrey;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border-radius: 50%;
  border: 2px solid white;
  padding: 10px;
  height: 3rem;
  width: 3rem;
`;
