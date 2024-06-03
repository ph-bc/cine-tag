import Card from "@/components/Card";
import videos from "@/jsons/db.json";
import styles from "./index.module.css";
import Banner from "@/components/Banner";
import Title from "@/components/Title";

export default function Favorites() {
  return (
    <>
      <Banner image="favorites" />
      <Title>Meus favoritos</Title>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </>
  );
}
