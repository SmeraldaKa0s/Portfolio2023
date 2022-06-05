import styles from "./styles.module.scss";

const BurgerMenu = ({handleCloseModal, isOpen}) => {
  return (
    <aside className={`${styles.container} ${isOpen ? styles.open : ""}`}>
      <div className={styles.boxTop}>
      <p onClick={handleCloseModal}>x</p>
      </div>
      <div className={styles.boxBottom}></div>
    </aside>
  );
};

export default BurgerMenu;
