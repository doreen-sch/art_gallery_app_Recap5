import ArtPieces from "@/components/ArtPieces";
import Heading from "@/components/Header";
import styled from "styled-components";

export default function Gallery({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <div>
      {" "}
      <Heading />
      <ArtPieces
        pieces={pieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}
