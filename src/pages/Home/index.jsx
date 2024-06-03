import Card from "@/components/Card";
import videos from "@/jsons/db.json";
import styles from "./index.module.css";
import Banner from "@/components/Banner";
import Title from "@/components/Title";

export default function Home() {
  return (
    <>
      <Banner image="home" />
      <Title>Um lugar para guardar seus vídeos e filmes!</Title>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </>
  );
}
