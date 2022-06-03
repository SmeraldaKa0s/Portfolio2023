import styles from "./styles.module.scss";
import Link from "next/link";

const Nav = () => {
  return (
    <navbar className={styles.container}>
      <div>
        <p>Alekxa</p>
      </div>
      <ul className={styles.list}>
      <Link href="/home">/home</Link>
      <Link href="/lesli">/lesli</Link>
      <Link href="/about">/about</Link>
      <Link href="/projects">/projects</Link>
      </ul>
    </navbar>
  );
};

export default Nav;
