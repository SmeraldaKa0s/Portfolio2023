import styles from "./styles.module.scss";
import Image from "next/image";
import Button from "../Button";

const Header = ({ image, caption }) => {
  return (
    <header>
      <div className={styles.container}>
        <Image
          src={image}
          width="370"
          height="267"
          className={styles.image}
          alt="retrato"
        />
        <p>{caption}</p>
      </div>
    </header>
  );
};

export default Header;
