import Card from "@/components/Card";
import styles from "./index.module.css";
import Banner from "@/components/Banner";
import Title from "@/components/Title";
import { useEffect, useState } from "react";

export default function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/ph-bc/cine-tag/videos")
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
