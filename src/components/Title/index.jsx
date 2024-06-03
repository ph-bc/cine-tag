import styles from "./index.module.css";

// eslint-disable-next-line react/prop-types
export default function Title({ children }) {
  return <div className={styles.title}><h1>{children}</h1></div>;
}
