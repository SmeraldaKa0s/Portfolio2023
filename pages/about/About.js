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
        <div className={styles.container}>
          <span>CREATIVE</span>
          <span>DEVELOPER</span>
          <span>DIGITAL</span>
          <span>DESIGNER</span>
        </div>
      </section>

    </Layout>
  );
};

export default About;
