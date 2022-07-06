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
          <p>Download my Resume</p>
          <Icon id="download" />
        </div>
        <div className={styles.boxCaption}>
          <p>
            I am a creative frontend developer, librarian, a little designer.
          </p>
          <p>My inbox always open for your friendly proposals.</p>
          <h2>Main Skills</h2>
          <p>Frontend development</p>
        </div>
        <div className={styles.boxImage}>
          <Image
            src="/Images/character2.png"
            width="200"
            height="450"
            className={styles.image}
            alt="personaje"
          />
        </div>
        <div className={styles.boxTech}>
          <ul>
            <li>JavaScript, HTML, CSS</li>
            <li>Sass, ReactJS, NextJS</li>
            <li>Tailwind, MaterialUI, Boostrap</li>
            <li>Git, Github, Figma</li>
            <li>Linux</li>
          </ul>
        </div>
        <div>
          <h2>Education</h2>
          <h3>In progress:</h3>
          <p>Bachelor of Electronic Arts - UNTREF (2020)</p>
          <p>Python, Numpy, Pandas, Anaconda, Google Colab, P5JS, DataSet.</p>
          <h3>Completed:</h3>
          <p>Frontend Developer - ADA ITW</p>
          <p>
            Algoritms, JavaScript, HTML, CSS, Sass, ReactJS, Github, Boostrap, Responsive Design
          </p>
          <p>Platzi courses:</p>
          <p>NextJS, Tailwind, Git, Linux</p>
          <p>Library Technician - ISFT 182</p>
          <p>
            I learned to retrieve information from databases, catalog and
            classify documentation; organize, maintain and curate periodicals and
            help users to find those materials.
          </p>
          <h3>Incomplete:</h3>
          <p>Bachelor of Visual Arts</p>
          <p>I learned about aesthetics, user experience, history and philosophy.</p>
        </div>
        <div>
          <h3>Also busy with</h3>
          <p>Technological Surveillance 📈</p>
          <p>Plants 🌿</p>
          <p>Swin 🏊🏼‍♀️</p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
