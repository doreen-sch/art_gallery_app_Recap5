export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <button 
      onClick={onToggleFavorite} 
      aria-label="favorite-button"
      style={{ backgroundColor: isFavorite ? "coral" : "white" }}
    >
      {isFavorite ? "❤️" : "🤍"}
    </button>
  );
}