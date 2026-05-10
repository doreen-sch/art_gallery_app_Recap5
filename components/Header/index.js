import styled from "styled-components";
import Image from "next/image";

export default function Header() {
  return (
    <StyledHeader className="headline">
      <StyledHeading>Art Gallery</StyledHeading>
      <StyledButton type="button" aria-label="shell icon for profile settings">
        <Image src="/images/shell.png" alt="Icon" width={32} height={32} />
      </StyledButton>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 2rem;
`;

const StyledHeading = styled.h1`
  text-align: center;
  color: #0e2e2a;
`;

const StyledButton = styled.button`
  background-color: lightgrey;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border-radius: 50%;
  border: 2px solid white;
  padding: 8px;
`;
