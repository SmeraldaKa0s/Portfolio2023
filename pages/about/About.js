import Layout from "../../components/Layout";
import styles from "./styles.module.scss";
import Icon from "../../components/Icon";
import cv from "../../public/cv.pdf";
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
              {" "}
              Avocada a la transdiciplina. Me expreso investigando y diseñando
              productos cuidadosamente elaborados. Ayudo a startups y equipos de
              diseño a construir experiencias y procesos duraderos.{" "}
            </p>
          </div>

          <article className={styles.section}>
            <div className={styles.centerAbout}>
              <div className={styles.centerContent}>
                <p className={styles.subtext}>COSAS QUE ME GUSTAN</p>
                <p className={styles.about}>
                  Actualmente estoy investigando los interticios en el diseño de
                  producto que integre ia.
                </p>
                <p className={`${styles.about} ${styles.margin}`}>
                  Anteriormente, tuve diversos roles que ampliaron mi
                  perspectiva a la hora de desarrollar tecnología. Haber pasado
                  por el rol de QA Analyst, Frontend Development y Researcher me
                  moldearon una mentalidad orientada hacia la constante búsqueda
                  de mejora y calidad.
                </p>
                <p className={`${styles.about} ${styles.margin}`}>
                  Antes de diseñar para la web me dedicaba a la Bibliotecologia,
                  las fuentes de informacion son muy importantes para mi.
                </p>
                <p className={`${styles.about} ${styles.margin}`}>
                  Además estudie Artes del Fuego, Filosofia, y Artes
                  Electrónicas.
                </p>
                <p className={`${styles.about} ${styles.margin}`}>
                  Todos estos temas tienen un impacto significativo en cómo
                  inicio y desarrollo mis procesos creativos, marcando la pauta
                  de cómo percibo el desarrollo de productos hoy en día.
                </p>
                <p className={`${styles.about} ${styles.margin}`}>
                  Cuando no estoy trabajando, normalmente estoy al aire libre, y
                  tambien diseño! hago estudios paisajisticos enfocados en flora
                  nativa, lo que me lleva a querer estar mucho tiempo en selvas,
                  bosques y diversidades vegetales para seguir reconociendo ese
                  mundo de relaciones complejas. Argentina -el mejor país del
                  mundo- tiene muchos biomas por explorar.{" "}
                </p>
              </div>
              <div className={styles.list}>
                <h3>EXPERIENCIA</h3>
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
