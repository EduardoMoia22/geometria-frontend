import Link from "../../../node_modules/next/link";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.container}>
      <span className={styles.logo}>educação artistica</span>

      <nav>
        <ul>
          <li>
            <Link href="/">Conteúdos</Link>
          </li>

          <li>
            <Link href="/aulas">Aulas</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
