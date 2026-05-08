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
       <StyledLink href="/favorites" $isActive={router.pathname === "/favorites"}>
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
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  text-align: center;
  background-color: ${({ $isActive }) => ($isActive ? "gray" : "transparent")};
`;
