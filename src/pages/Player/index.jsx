import Banner from "@/components/Banner";
import styles from "./index.module.css";
import Title from "@/components/Title";
import videos from "@/jsons/db.json";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound";

export default function Player() {
  const params = useParams();
  const video = videos.find((video) => {
    return video.id === Number(params.id);
  });

  if (!video) {
    return <NotFound />;
  }

  return (
    <>
      <Banner image="player" />
      <Title>Player</Title>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullScreen
        ></iframe>
      </section>
    </>
  );
}
