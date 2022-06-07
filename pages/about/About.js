import Layout from "../../components/Layout";
import styles from "./styles.module.scss";
import Icon from "../../components/Icon";
import Image from "next/image";

const About = () => {
  return (
    <Layout title="About">
      <section className={styles.container}>
        <h1>About</h1>
        <div className={styles.boxLinks}>
          <a href="https://www.linkedin.com/in/alx-l/" target="_blank">
            <Icon id="linkedin" />
          </a>
          <a
            href="https://github.com/SmeraldaKa0s/Portfolio2022"
            target="_blank"
            rel="noreferrer"
            iconClassName={styles.iconGithub}
          >
            <Icon id="github" />
          </a>
          <a
            href="mailto:alek.xandra.lerner@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Icon id="email" />
          </a>
        </div>
        <div className={styles.boxDownload}>
          <p>Dowload my Resume</p>
          <Icon id="download" />
        </div>
        <div className={styles.boxCaption}>
          <p>
            I am a creative frontend developer, librarian, a little designer.
          </p>
          <p>My inbox always open for your friendly proposals.</p>
          <h2>Skills</h2>
          <p>These characters show some of my interests and knowledge.</p>
        </div>

        <Image src="/Images/personaje.svg" width="200" height="140" className={styles.image} alt="retrato"/>

      </section>
    </Layout>
  );
};

export default About;
