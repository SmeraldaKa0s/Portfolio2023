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
    <navbar className={styles.container}>
      <div>
        <p>Alekxa</p>
      </div>
      <div className={styles.burgerMenu} onClick={handleOpenModal}>
        <div></div>
        <div className={styles.line}></div>
        <div></div>
      </div>
      <BurgerMenu handleCloseModal={handleCloseModal} isOpen={openModalBurger}/>
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
