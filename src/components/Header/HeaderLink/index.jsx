import { Link } from "react-router-dom";
import styles from "./index.module.css";

// eslint-disable-next-line
export default function HeaderLink({ url, children }) {
  return (
    <Link to={url} className={styles.link}>
      {children}
    </Link>
  );
}
