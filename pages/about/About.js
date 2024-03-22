import Layout from "../../components/Layout";
import styles from "./styles.module.scss";
// import Icon from "../../components/Icon";
// import cv from "../../public/cv.pdf";
import List from "../../components/List";
import Card from "../../components/Card/Card";

const About = () => {
  const items = [
    {
      id: 1,
      name: "UX/UI Designer & Developer, Self Emproyed",
      description: "This is the first item in the list.",
      time: "2021 - Now",
    },
    {
      id: 2,
      name: "Market Research & UX Research, UNTREF",
      description: "This is the second item in the list.",
      time: "2022 - 2023",
    },
    {
      id: 3,
      name: "QA Analyst & Frontend Developer, ATAWAY",
      description: "This is the third item in the list.",
      time: "2022 - 2023",
    },
  ];
  /**
   * Ejemplo de como deberian ser las traducciones, el objeto content deberia estar
   * en un archivo separado y el dato "ES" venir del context
   */

  const content = {
    ES: {
      title: "Sobre mi",
    },
    EN: {
      title: "About",
    },
  };

  const { title } = content["EN"];

  return (
    <>
      <Layout title="About">
        <section className={styles.section}>
          <div className={styles.container}>
            <p className={styles.text1}>UX DESIGNER</p>

            <p className={styles.text2}>RESEARCHER</p>

            <div className={styles.box}>
              <p className={styles.subtext}>
                INTERESED ABOUT MAKING DISTINCTIVE EXPERIENCES.
              </p>

              <p className={styles.text3}>CREATIVE</p>
            </div>

            <p className={styles.text4}>DEVELOPER</p>
          </div>

          <div className={styles.mainBox}>
            <p className={styles.mainText}>
              Oriented to transdisciplinarity. I express myself through researching and designing carefully crafted products.
              I help startups and design teams build lasting experiences and processes.

            </p>
          </div>

          <article className={styles.section}>
            <div className={styles.centerAbout}>
              <div className={styles.centerContent}>
                <p className={styles.subtext}>WHAT I&apos;M UP TO</p>
                <p className={styles.about}>
                  I&apos;m currently exploring the product design process that integrates AI and
                  experimenting with No Code tools to craft better prototypes.
                </p>
                <p className={`${styles.about} ${styles.margin}`}>
                  Previously, I held various roles that broadened my perspective when developing technology.
                  Going through positions such as QA Analyst, Frontend Development, and Researcher,
                  I have developed a mindset oriented towards a continuous pursuit of improvement and quality.

                </p>
                <p className={`${styles.about} ${styles.margin}`}>
                Before designing for the web, I worked in Library Science, 
                where I learned the importance of curated information sources for user-centric design in UX/UI.
                </p>
                <p className={`${styles.about} ${styles.margin}`}>
                  In addition, I studied a bit of Fire Arts, Philosophy, and Electronic Arts.
                </p>
                <p className={`${styles.about} ${styles.margin}`}>
                  All these topics have a significant impact on how I start and develop my creative processes,
                  setting the tone for how I perceive product development today.
                </p>
                <p className={`${styles.about} ${styles.margin}`}>
                  When I&apos;m not working, I&apos;m usually outdoors, and I also design!
                  I focus on landscape studies centered on native flora, which drives me to spend a lot of time in jungles,
                  forests, and diverse plant ecosystems to continue recognizing that world of complex relationships.
                  Argentina - the best country in the world - has many biomes to explore.
                </p>
              </div>
              <div className={styles.list}>
                <h3>EXPERIENCE</h3>
                <List items={items} />
              </div>
            </div>
          </article>
          <div className={styles.container}>
            <p className={styles.text1}>VISUAL</p>
            <p className={styles.text3}>COLLECTION</p>
            <p className={styles.text4}>ABOUT ME</p>
          </div>
          <div className={styles.imageConteiner}>
            <Card image={"/Images/principal.png"} withBN />
            <Card image={"/Images/talking.jpeg"} withBN />
            <Card image={"/Images/colgado.jpg"} withBN />
            <Card image={"/Images/mafia.jpeg"} withBN />
            <Card image={"/Images/soldar.jpeg"} withBN />
            <Card image={"/Images/pasear.jpg"} withBN />
            <Card image={"/Images/mochila.jpg"} withBN />
            <Card image={"/Images/job.jpeg"} withBN />
            <Card image={"/Images/selva.jpg"} withBN />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
