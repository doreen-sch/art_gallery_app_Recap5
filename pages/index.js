import Spotlight from "@/components/Spotlight";

export default function HomePage({ pieces, onToggleFavorite }) {
  return (
    <div>
      <h1>Art Gallery</h1>
      <Spotlight pieces={pieces} onToggleFavorite={onToggleFavorite} />
    </div>
  );
}
