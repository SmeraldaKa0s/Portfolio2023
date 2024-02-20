import styles from "./styles.module.scss";
import ImageNext from "../../components/ImageNext";
import { useState } from "react";
import Icon from "../Icon";

const CaseStudyOne = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={`${styles.margin} ${styles.container}`}>
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
          <p className={styles.main}>
            Un aroma puede revelar más de lo que pensamos. Nuestra investigación
            se centró en explorar la tecnología y aplicación de{" "}
            <em>narices electrónicas</em>, dispositivos avanzados capaces de
            detectar y clasificar diferentes tipos de olores. El objetivo fue
            sentar las bases para el desarrollo de un dispositivo entrenado con
            machine learning y una aplicación móvil para los vecinos de zonas
            afectadas por la contaminación.
          </p>
          <div>
            <p
              className={`${styles.main} ${styles.tldr}`}
              onClick={toggleModal}
            >
              ▸ TL;DR
            </p>
          </div>
          {isModalOpen && (
            <div className={styles.modal}>
              <div onClick={toggleModal} className={styles.modalContent}>
                <p className={`${styles.main} ${styles.tldr}`}>
                  Con la Secretaría de Investigación de UNTREF nos dedicamos a
                  analizar innovaciones que puedan tener un impacto positivo. En
                  este caso, colaboramos con una organización comprometida con
                  recuperar la Cuenca Matanza-Riachuelo, el río más contaminado
                  de Argentina.
                  <p className={`${styles.main} ${styles.tldr}`}>
                    Sin embargo, nuestro enfoque trascendió lo meramente
                    tecnológico. En un mundo donde la contaminación ambiental es
                    un desafío apremiante, para nosotros la investigación no
                    podía partir de otra cosa que no fueran las necesidades y
                    vivencias de los usuarios.{" "}
                  </p>
                  <p className={`${styles.main} ${styles.tldr}`}>
                    Con esta visión centrada en las personas, nos propusimos
                    crear una escala de clasificación de olores basada en las
                    denuncias y experiencias de los vecinos. También analizamos
                    la usabilidad en interfaces para desarrollar una aplicación
                    móvil intuitiva. Además, identificamos los tipos y
                    concentraciones de gases emitidos por industrias locales y
                    evaluamos equipos de monitoreo continuo con narices
                    electrónicas a nivel nacional e internacional.
                  </p>
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
          <p className={styles.subtitle}>DOMAIN EXPERTS (10 PEOPLE):</p>
          <p className={styles.roles}>
            Investigadores especializados en el campo de detección de gases y
            calidad del aire. Por acuerdos de confidencialidad, se refiere al
            conjunto como un todo en lugar de detallar sus afiliaciones
            individuales.
          </p>
          <p className={styles.subtitle}>DATE:</p>
          <p>Octubre 2022 - Marzo 2023</p>
        </div>
      </div>
      <div className={`${styles.card} ${styles.margin}`}>
        <div className={styles.image}>
          <ImageNext src="/Images/riachuelo.jpeg" width={700} height={400} />
        </div>
        <span className={"text-base text-zinc-400"}>
          En la primer reunión con los stakeholders hicimos observación
          participante en el río.
        </span>
      </div>
      <div className={`${styles.boxProblem} ${styles.margin}`}>
        <div className={styles.roles}>
          <h3>Understanding the problem</h3>
        </div>
        <div>
          <p className={styles.description}>
            Queremos entender mejor cómo la tecnología de narices electrónicas
            puede ser utilizada para medir y clasificar olores desagradables en
            la Cuenca Matanza-Riachuelo, con el fin de establecer las bases para
            el desarrollo de un dispositivo y una aplicación móvil que
            contribuya a mejorar la calidad del aire y el bienestar de las
            comunidades afectadas.
          </p>
        </div>
      </div>
      <div className={`${styles.boxProblem} ${styles.margin}`}>
        <div className={styles.roles}>
          <span>Objetivos de investigación</span>
        </div>
        <div>
          <ul className={styles.description}>
            <li className={styles.roles}>
              ・ Identificar oportunidades de innovación.
            </li>
            <li className={styles.roles}>
              ・ Examinar y abordar el mercado para proporcionar valor.
            </li>
            <li className={styles.roles}>
              ・ Crear una escala de clasificación de olores basada en las
              experiencias de los vecinos. La escala va a servir como base para
              desarrollar una interfaz intuitiva en la aplicación móvil.
            </li>
            <li className={styles.roles}>
              ・ Identificar los tipos y concentraciones de gases contaminantes
              emitidos por las industrias locales. Para comprender cómo esta
              información impacta en la percepción y la interacción de los
              usuarios con la aplicación.
            </li>
            <li>
              ・ Evaluar y comparar equipos de monitoreo continuo con narices
              electrónicas, tanto a nivel nacional como internacional.
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.boxProblem} ${styles.margin}`}>
        <div className={styles.roles}>
          <span>Indicadores y métricas</span>
        </div>
        <div>
          <ul className={styles.description}>
            <li className={styles.roles}>
              ・ Cantidad: Número de patentes, publicaciones científicas,
              proyectos de I+D+i y empresas involucradas en tecnología de
              narices electrónicas.
            </li>
            <li className={styles.roles}>
              ・ Tiempo promedio de desarrollo de una nueva tecnología de nariz
              electrónica y tiempo de respuesta a las necesidades del mercado.
            </li>
            <li className={styles.roles}>
              ・ Costo promedio de desarrollo y costo de implementación de la
              tecnología.
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.boxHipotesis} ${styles.margin}`}>
        <div className={styles.roles}>
          <h3>Hipótesis</h3>
        </div>
        <div
          className={`${styles.hipotesis} ${styles.containerHipotesis}`}
        >
          <div className={`${styles.boxHipotesis} ${styles.card}`}>
            <p>Hipótesis Descriptiva</p>
            <p className={styles.size}>
              Los olores del río contaminado impactan la salud de los vecinos,
              pero pueden ser detectados por narices electrónicas con IA,
              permitiendo crear un sistema de detección y app de reporte eficaz
              para mejorar la calidad del aire.
            </p>
          </div>
          <div className={"grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 lg:gap-8"}
          >
            <div className={styles.card}>
              <p>Hipótesis Explicativa</p>
              <p className={styles.size}>
                El reporte de olores a través de la app móvil por los vecinos
                contribuirá a mejorar su calidad de vida.
              </p>
            </div>
            <div className={styles.card}>
              <p>Hipótesis Predictiva </p>
              <p className={styles.size}>
                El uso de las narices electrónicas por parte de las autoridades
                ambientales puede conducir a la identificación y sanción de las
                empresas que contaminan el río.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyOne;
