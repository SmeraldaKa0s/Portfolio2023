import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import Icon from "../Icon";

const Header = ({ image, caption, story }) => {
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
        <div className={styles.story}>
          <Link href="/about">
            <a className={"text-left inline-flex"}>
              <span className={"text-left pl-1"}>{story}</span>

              <Icon id="iconArrow" iconClassName={styles.icon} />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
