import styles from "./styles.module.scss";
import ImageNext from "../../components/ImageNext";

const CaseStudyTwo = ({ project }) => {
  return (
    <div className={`${styles.margin} ${styles.container}`}>
      <p className={styles.text}>CONSTRUCTION CASE STUDY</p>

      <div className={styles.card}>
        <div className={styles.image}>
          <ImageNext
            src={project.image}
            alt={project.title}
            width={900}
            height={600}
          />
        </div>
      </div>

      <div className={styles.boxInfo}>
        <div className={styles.description}>
          <p className={styles.main}>
            MYXA, empresa técnica de tableros contra incendio, buscaba modernizar su presencia online y mejorar la experiencia de sus clientes.

            Empezamos desde cero, definiendo la marca y creando una identidad visual completa. Diseñamos y desarrollamos una página web atractiva y funcional, además de elementos como tarjetas de presentación y prendas laborales.
          </p>
        </div>
        <div className={styles.boxRoles}>
          <p className={styles.subtitle}>MY ROLES:</p>
          <p className={styles.roles}>
            Product Design ・ Brand Identity ・ UX/UI Design
          </p>
          <p className={styles.subtitle}>TEAMMATE:</p>
          <p className={styles.roles}>
            Emilia Cabral - Web Developer
          </p>
          <p className={styles.subtitle}>PLATFORM:</p>
          <p className={styles.roles}>Desktop / Mobile Web</p>
          <p className={styles.subtitle}>DATE:</p>
          <p>Octubre 2023 - Marzo 2024</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyTwo;