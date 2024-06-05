import styles from "./index.module.css";
import favoriteIcon from "./favorite.png";
import unfavoriteIcon from "./favorite_outline.png";
import { useFavoriteContext } from "@/contexts/favorites";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Card({ id, title, cover }) {
  const { favorites, toggleFavorite } = useFavoriteContext();
  const isFavorite = favorites.some((fav) => fav.id === id);
  const icon = isFavorite ? favoriteIcon : unfavoriteIcon;

  return (
    <div className={styles.cardContainer}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={cover} alt={title} className={styles.cover} />
        <h2>{title}</h2>
      </Link>
      <img
        src={icon}
        alt="Favoritar filme"
        className={styles.favorite}
        onClick={() => toggleFavorite({ id, title, cover })}
      />
    </div>
  );
}
