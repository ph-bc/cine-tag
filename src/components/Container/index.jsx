import styles from "./index.module.css";

// eslint-disable-next-line react/prop-types
export default function Container({ children }) {
  return <section className={styles.container}>{children}</section>;
}
