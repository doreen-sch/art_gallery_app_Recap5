import ArtPieces from "@/components/ArtPieces";

export default function HomePage({ pieces }) {
  console.log(pieces);

  return (
    <div>
      <h1>Art Gallery</h1>
      <ArtPieces />
    </div>
  );
}
