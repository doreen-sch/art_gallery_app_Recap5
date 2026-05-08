import { uid } from "react";

export default function ColorPallette({ selectedArtPiece }) {
  console.log("colors", selectedArtPiece.colors);
  const colors = selectedArtPiece.colors;
  return (
    <section>
      {colors.map((color) => (
        <div
          key={uid}
          style={{ width: "20px", height: "20px", backgroundColor: color }}
        />
      ))}
    </section>
  );
}
