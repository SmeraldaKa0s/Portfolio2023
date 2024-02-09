import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>
        <ul className={styles.boxList}>
          <li>
            <a href="https://www.linkedin.com/in/alx-l/"> LINKEDIN</a>
          </li>
          <li>
            {" "}
            <a href="https://github.com/SmeraldaKa0s">GITHUB</a>
          </li>
          <li>
            {" "}
            <a href="https://twitter.com">TWITTER</a>
          </li>
        </ul>
      </div>
      <div className={styles.boxDate}>
        <p>2024</p>
      </div>
    </footer>
  );
};

export default Footer;
