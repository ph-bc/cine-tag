import styles from "./index.module.css";

export default function NotFound() {
  return (
    <section className={styles.notFound}>
      <h2>Ops!</h2>
      <p>O conteúdo que você procura não existe mais ou nunca existiu...</p>
    </section>
  );
}
