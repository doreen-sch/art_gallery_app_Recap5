import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();

  return (
    <StyledNavigation>
      <StyledLink href="/" $isActive={router.pathname === "/"}>
        <StyledWrapper>
          <Image src="/images/seestern.png" alt="Home" width={24} height={24} />
        </StyledWrapper>
        <span>Spotlight</span>
      </StyledLink>
      <StyledLink href="/_gallery" $isActive={router.pathname === "/_gallery"}>
        <StyledWrapper>
          <Image
            src="/images/gallery_new.png"
            alt="Overview"
            width={24}
            height={24}
          />
        </StyledWrapper>
        <span>Art Pieces </span>
      </StyledLink>
      <StyledLink
        href="/favorites"
        $isActive={router.pathname === "/favorites"}
      >
        <StyledWrapper>
          <Image
            src="/images/heart_new.png"
            alt="Favorites"
            width={24}
            height={24}
          />
        </StyledWrapper>
        <span>Favorites </span>
      </StyledLink>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-around;
  height: 2rem;
  background-color: lightgrey;
  width: calc(100% - 32px);
  max-width: 700px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border-radius: 999px;
  padding: 45px 24px;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #1c5e56;
  text-decoration: none;
  font-size: 1.25rem;
  line-height: 1.4;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  text-align: center;
  font-weight: ${({ $isActive }) => ($isActive ? "bold" : "normal")};
  background-color: ${({ $isActive }) => ($isActive ? "gray" : "transparent")};
`;

const StyledWrapper = styled.div`
  border-radius: 50%;
  background-color: ${({ $isActive }) => ($isActive ? "black" : "transparent")};
  display: inline-flex;
`;
