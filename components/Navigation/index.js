import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <StyledNavigation>
      <StyledLink href="/" $isActive={router.pathname === "/"}>
        <StyledActiveBox $isActive={router.pathname === "/"}>
          <Image src="/images/seestern.png" alt="Home" width={24} height={24} />
          <span>Spotlight</span>
        </StyledActiveBox>
      </StyledLink>
      <StyledLink href="/gallery" $isActive={router.pathname === "/gallery"}>
        <StyledActiveBox $isActive={router.pathname === "/gallery"}>
          <Image
            src="/images/gallery_new.png"
            alt="Overview"
            width={24}
            height={24}
          />
          <span>Art Pieces </span>
        </StyledActiveBox>
      </StyledLink>
      <StyledLink
        href="/favorites"
        $isActive={router.pathname === "/favorites"}
      >
        <StyledActiveBox $isActive={router.pathname === "/favorites"}>
          <Image
            src="/images/heart_new.png"
            alt="Favorites"
            width={24}
            height={24}
          />
          <span>Favorites </span>
        </StyledActiveBox>
      </StyledLink>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  background-color: lightgrey;
  box-shadow:
    0 1px 10px #4a7375,
    inset 0 0 10px rgba(255, 255, 255, 0.5);
  width: calc(100% - 32px);
  height: 5rem;
  max-width: 700px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border-radius: 999px;
  overflow: hidden;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #1c5e56;
  text-decoration: none;
  font-size: 1.25rem;
  line-height: 1.4;
  align-items: center;
  justify-content: center;
  width: 33.33%;
  height: 100%;
  text-align: center;
`;

const StyledActiveBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({ $isActive }) =>
    $isActive ? "#bee4e6" : "transparent"};
  font-weight: ${({ $isActive }) => ($isActive ? "bold" : "normal")};
`;
