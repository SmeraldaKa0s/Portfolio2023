import styles from "./styles.module.scss";
import ImageNext from "../../components/ImageNext";
import { useState } from "react";

const CaseStudyOne = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.image}>
          <ImageNext
            src={project.image}
            alt={project.title}
            width={900}
            height={500}
          />
        </div>
      </div>
      <div className={styles.content}>
        <span>{project.number}</span>
        <h2 className={styles.title}>{project.title}</h2>
        {/*  <p>{caption}</p> */}
      </div>
      <div className={styles.boxInfo}>
        <div className={styles.description}>
          {" "}
          <p className={styles.main}>
            Nuestra investigación se centró en explorar la tecnología y
            aplicación de las <em>narices electrónicas</em>, dispositivos
            avanzados capaces de oler y detectar diferentes tipos de aromas.
          </p>
          <p className={`${styles.main} ${styles.tldr}`} onClick={toggleModal}>TL;DR</p>
          {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p onClick={toggleModal}>
            </p>
            <p className={`${styles.main} ${styles.tldr}`}>
              Con la secretaría de investigación de UNTREF nos dedicamos a
              investigar y analizar las innovaciones que pueden tener un impacto
              positivo en el mundo. En este caso, colaboramos con una organización
              comprometida con la recuperación de la Cuenca Matanza-Riachuelo, el
              río más contaminado de Argentina.
            </p>
          </div>
        </div>
      )}
          {/*  <p>Year: {project.year}</p>
          <p>Caption: {project.caption}</p> */}
        </div>
        <div className={styles.boxRoles}>
          <p className={styles.subtitle}>MY ROLES:</p>
          <p className={styles.roles}>
            UX Researcher ・ Market Researcher ・ Patent Researcher
          </p>
          <p className={styles.subtitle}>TEAMMATE:</p>
          <p> Marcela Ricosta - Business Specialist, Research Lead</p>
          <p>Sara Montenegro - Manager</p>
          <p className={styles.roles}>
            Paula Araujo - UX Researcher, Market Researcher, Patent Researcher
          </p>
          <p className={styles.subtitle}>DATE:</p>
          <p>Octubre 2022 - Marzo 2023</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyOne;
