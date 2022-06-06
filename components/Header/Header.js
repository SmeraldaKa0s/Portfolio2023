import styles from "./styles.module.scss";
import Image from "next/image";
import Button from "../Button";

const Header = ({ image, caption }) => {
  return (
    <header>
      <div className={styles.container}>
        <Image src={image} width="370" height="267" className={styles.image} alt="retrato"/>
        <p>{caption}</p>
      </div>
      <div className={styles.box}>
        <Button
          className={styles.button}
          title="Get in touch"
          type="quiet"
          iconId="iconArrow"
          iconClassName={styles.iconArrow}
        />
        <div className={styles.underLine}></div>
      </div>
    </header>
  );
};

export default Header;
