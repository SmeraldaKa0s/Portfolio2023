import styles from "./styles.module.scss";
import Button from "../Button";
import Link from "next/link";

const BurgerMenu = ({ handleCloseModal, isOpen }) => {
  return (
    <aside className={`${styles.container} ${isOpen ? styles.open : ""}`}>
      <div className={styles.boxTop}>
        <Button
          iconId="close"
          iconSize="9"
          className={styles.buttonClose}
          onClick={handleCloseModal}
          type="quiet"
        />
        <p className={styles.title}>Alekxa</p>
        <ul className={styles.boxOptions}>
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
        </ul>
      </div>
      <div className={styles.boxBottom}>
        <div className={`${styles.boxOptions} ${styles.colorText}`}>
          <a
            href="https://www.linkedin.com/in/alx-l/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/SmeraldaKa0s/Portfolio2022"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a href="" target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </div>
    </aside>
  );
};

export default BurgerMenu;
