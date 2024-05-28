import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Desenvolvido por{" "}
        <a
          href="https://github.com/ph-bc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pedro Cardoso
        </a>
        .
      </p>
    </footer>
  );
}
