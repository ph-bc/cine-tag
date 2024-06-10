import Banner from "@/components/Banner";
import styles from "./index.module.css";
import Title from "@/components/Title";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound";
import { useState, useEffect } from "react";

export default function Player() {
  const params = useParams();
  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/ph-bc/cine-tag/videos?title=${params.title}`
    )
      .then((response) => response.json())
      .then((data) => {
        setVideo(...data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.title]);

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
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
}
