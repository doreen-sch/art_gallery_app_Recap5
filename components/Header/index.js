import styled from "styled-components";
import Image from "next/image";

export default function Header() {
  return (
    <StyledHeaderWrapper>
      <StyledHeader className="headline">
        <StyledHeading>Art Gallery</StyledHeading>
        <StyledButton
          type="button"
          aria-label="shell icon for profile settings"
        >
          <Image src="/images/shell.png" alt="Icon" width={30} height={30} />
        </StyledButton>
      </StyledHeader>
    </StyledHeaderWrapper>
  );
}

const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  width: 100%;
  max-width: 700px;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const StyledHeading = styled.h1`
  color: #0e2e2a;
  margin: 0 auto;
  font-size: 2rem;
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
