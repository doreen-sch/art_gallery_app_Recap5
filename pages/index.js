import Heading from "@/components/Header";
import Spotlight from "@/components/Spotlight";
import styled from "styled-components";

export default function HomePage({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <div>
      <Heading />
      <Spotlight
        pieces={pieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}
