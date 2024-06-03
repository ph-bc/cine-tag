import styles from "./index.module.css";
import favoriteIcon from "./favorite.png";

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function Card({ id, title, cover }) {
  console.log("cover prop:", cover);

  return (
    <div className={styles.cardContainer}>
      <img src={cover} alt={title} className={styles.cover} />
      <h2>{title}</h2>
      <img
        src={favoriteIcon}
        alt="Favoritar filme"
        className={styles.favorite}
      />
    </div>
  );
}
