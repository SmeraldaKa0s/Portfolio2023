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
          <p className={styles.text1}>CREATIVE</p>
          <p className={styles.text2}>DEVELOPER</p>
          <div className={styles.box}>
            <p className={styles.subtext}>INTERESED ABOUT MAKING DISTINCTIVE EXPERIENCES.</p>
            <p className={styles.text3}>DIGITAL</p>
          </div>
          <p className={styles.text4}>DESIGNER</p>
        </div>
        <div className={styles.boxImage}>
          {/* <Image
            src="/Images/character.png"
            width="200"
            height="450"
            className={styles.image}
            alt="personaje"
          /> */}
        </div>
      </section>

    </Layout>
  );
};

export default About;
