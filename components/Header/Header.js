import styles from "./styles.module.scss";
import Image from "next/image";

const Header = ({ image, caption }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Image
          src={image}
          width="600"
          height="400"
          className={styles.image}
          alt="retrato"
        />
        <div className={styles.boxParrafo}>
          <p className={styles.parrafo}>{caption}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
