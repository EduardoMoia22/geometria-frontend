import Link from "../../../node_modules/next/link";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.container}>
      <span className={styles.logo}>logo</span>

      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/conteudos">Conteúdos</Link>
          </li>

          <li>
            <Link href="/aulas">Aulas</Link>
          </li>

          <li>
            <Link href="/exercicios">Exercícios</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
