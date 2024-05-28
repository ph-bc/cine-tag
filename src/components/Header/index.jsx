import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import styles from "./index.module.css"
import HeaderLink from "./HeaderLink";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link to="./">
                <img src={logo} alt="Logo CineTag" />
            </Link>
            <nav>
                <HeaderLink url="./">
                    Home
                </HeaderLink>
                <HeaderLink url="./favoritos">
                    Favoritos
                </HeaderLink>
            </nav>
        </header>
    )
}