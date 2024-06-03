import Card from "@/components/Card";
import styles from "./index.module.css";
import Banner from "@/components/Banner";
import Title from "@/components/Title";
import { useFavoriteContext } from "@/contexts/favorites";

export default function Favorites() {
  const { favorites } = useFavoriteContext();

  return (
    <>
      <Banner image="favorites" />
      <Title>Meus favoritos</Title>
      <section className={styles.container}>
        {favorites.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
}
