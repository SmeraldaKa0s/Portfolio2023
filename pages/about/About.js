import Layout from "../../components/Layout";
import styles from "./styles.module.scss";
import Icon from "../../components/Icon";
import Image from "next/image";
import cv from "../../public/cv.pdf"

const About = () => {

  /**
   * Ejemplo de como deberian ser las traducciones, el objeto content deberia estar 
   * en un archivo separado y el dato "ES" venir del context
   */

  const content = {
    ES: {
      title: "Sobre mi",
    },
    EN: {
      title: "About"
    }
  }

  const { title } = content["EN"]

  return (
    <Layout title="About">
      <section>
        <span className={styles.progress}>WORK IN PROGRESS</span>
        <div className={styles.container}>
          <span>CREATIVE</span>
          <span>DEVELOPER</span>
          <div className={styles.box}>
            <p>INTERESED ABOUT MAKING DISTINCTIVE EXPERIENCES.</p>
            <span>DIGITAL</span>
          </div>
          <span>DESIGNER</span>
        </div>
        <div className={styles.boxImage}>
          <Image
            src="/Images/character.png"
            width="200"
            height="450"
            className={styles.image}
            alt="personaje"
          />
        </div>
      </section>

    </Layout>
  );
};

export default About;
