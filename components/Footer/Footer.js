import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
        <div>
          <ul className={styles.boxList}>
            <li>
              <a href="https://www.linkedin.com/in/alx-l/"></a> Linkedin
            </li>
            <li>
              {" "}
              <a href="https://github.com/SmeraldaKa0s"></a> Github
            </li>
            <li>
              {" "}
              <a href="https://twitter.com"></a> Twitter{" "}
            </li>
          </ul>
        </div>
        <div className={styles.boxDate}>
          <p>2023</p>
        </div>
    </footer>
  );
};

export default Footer;
