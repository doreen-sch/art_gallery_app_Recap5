import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();

  return (
    <StyledNavigation>
      <StyledLink href="/" $isActive={router.pathname === "/"}>
        Spotlight
      </StyledLink>
      <StyledLink href="/_gallery" $isActive={router.pathname === "/_gallery"}>
        Gallery
      </StyledLink>
      <StyledLink
        href="/favorites"
        $isActive={router.pathname === "/favorites"}
      >
        Favorites
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
  padding: 35px 24px;
`;

const StyledLink = styled(Link)`
  color: darkblue;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  text-align: center;
  background-color: ${({ $isActive }) => ($isActive ? "gray" : "transparent")};
`;
