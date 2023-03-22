import styles from "./styles.module.scss";
import Link from "next/link";
import BurgerMenu from "../BurgerMenu";
import { useState } from "react";

const Nav = () => {
  const [openModalBurger, setOpenModalBurger] = useState(false);

  const handleOpenModal = () => {
    setOpenModalBurger(true);
  };

  const handleCloseModal = () => {
    setOpenModalBurger(false);
  };

  return (
    <nav className={styles.container}>
      <div>
        <Link href="/home">
          <a className={styles.name}>Alekxa</a>
        </Link>
      </div>
      <div className={styles.burgerMenu} onClick={handleOpenModal}>
        <div></div>
        <div className={styles.line}></div>
        <div></div>
      </div>
      <BurgerMenu
        handleCloseModal={handleCloseModal}
        isOpen={openModalBurger}
      />
      <ul className={styles.list}>
        <Link href="/about">
          <a>
            Info
            <span>ABOUT ME</span>
          </a>
        </Link>
        <Link href="/projects">
          <a>
            Work
            <span>SOME CASES</span>
          </a>
        </Link>
        <Link href="/contact">Contact</Link>
      </ul>
    </nav>
  );
};

export default Nav;
