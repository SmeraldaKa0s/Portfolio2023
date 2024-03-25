import styles from "./styles.module.scss";
import ImageNext from "../../components/ImageNext";


//https://github.com/MinJieLiu/react-photo-view
//usar para las imágenes

const CaseStudyThree = ({ project }) => {
  return (
    <div className={`${styles.margin} ${styles.container}`}>
      <div className={styles.card}>
        <div className={styles.image}>
          <ImageNext
            src={project.image}
            alt={project.title}
            width={900}
            height={600}
          />
        </div>
        <div className={styles.gradient}>
          <div className={styles.content}>
            <span className="text-right">{project.number}</span>
            <h2 className={styles.title}>{project.title}</h2>
            {/*  <p>{caption}</p> */}
          </div>
        </div>
      </div>
      <div className={styles.boxInfo}>
        <div className={styles.description}>
          <p className={styles.main}>
            Primavera es una ONG humanitaria que brinda valiosos programas de
            educación para adultos, capacitación laboral y atención médica a su
            comunidad. A pesar de su impacto positivo, la organización carecía
            de una presencia en línea que facilitara el acceso a sus servicios.
            El equipo de Primavera reconoció la necesidad de diseñar y
            desarrollar su primer sitio web para brindar una mejor experiencia
            de usuario y aumentar la interacción con su comunidad.
          </p>
        </div>
        <div className={styles.boxRoles}>
          <p className={styles.subtitle}>MY ROLES:</p>
          <p className={styles.roles}>
            UX/UI Designer ・ Brand Identity ・ NoCode Developer
          </p>
          <p className={styles.subtitle}>PLATFORM:</p>
          <p className={styles.roles}>Mobile Web / Desktop</p>
          <p className={styles.subtitle}>DATE:</p>
          <p>Octubre 2022 - Marzo 2023</p>
        </div>
      </div>

      <div className={`${styles.boxProblem} ${styles.margin}`}>
        <div className={styles.roles}>
          <p>01</p>
          <h3>Challenge</h3>
        </div>
        <div>
          <p className={styles.description}>
            Identificamos dos desafíos importantes a abordar en el diseño del
            sitio web. Primero, reconocimos la necesidad de ampliar la audiencia
            más allá de las redes sociales y aumentar el tráfico de visitantes
            fuera de estas plataformas. En segundo lugar, la ONG pretendía
            transmitir una sensación de calidez y fraternalismo para atraer a
            usuarios de todas las edades, considerando las diversas habilidades
            digitales que podrían tener.
          </p>
        </div>
      </div>
      <div className={`${styles.boxProblem} ${styles.margin}`}>
        <div className={styles.roles}>
          <p>02</p>
          <h3>Immersion</h3>
        </div>
        <div>
          <p className={`${styles.description} ${styles.roles}`}>
            Comencé adentrándome en la propuesta de valor de Primavera para
            ganar claridad y alineación.
          </p>
          <p className={`${styles.description} ${styles.roles}`}>
            Durante la fase de inmersión, llevé a cabo una sesión de
            descubrimiento de medio día, donde abordamos las preguntas más
            urgentes de la ONG. Luego utilizando los conocimientos recopilados
            en esta sesión, establecimos el objetivo compartido.
          </p>
          <ul className={`${styles.description} ${styles.roles}`}>
            What I did:
            <li>・1:1 Interviews with Stakeholders</li>
            <li>・Competitive Audit</li>
            <li>・Brand Audit</li>
          </ul>
        </div>
      </div>
      <div className={`${styles.card} ${styles.margin}`}>
        <div className={styles.image}>
          <ImageNext
            unoptimized
            src="/Images/Mapamental.jpg"
            width={900}
            height={700}
          />
        </div>
        <span className={"text-base text-zinc-400"}>
          Mind map of the immersion phase to establish hierarchies and structure
          elements by categories.
        </span>
      </div>
      <div className={`${styles.boxProblem} ${styles.margin}`}>
        <div className={styles.roles}>
          <p>03</p>
          <h3>Design Strategy</h3>
        </div>
        <div>
          <p className={`${styles.description} ${styles.roles}`}>
            Durante la fase de estrategia de diseño, establecimos objetivos
            importantes para el producto: como compatibilidad con artículos
            instantáneos de Facebook, un blog con carga previa de artículos en
            la parte superior de la pagina, un buscador interno amigable que
            permita encontrar rápidamente información sobre programas, eventos,
            etc.
          </p>
          <p className={`${styles.description} ${styles.roles}`}>
            También realicé una investigación comparativa para aprender de
            competidores directos e indirectos e identifiqué atributos clave de
            nuestro público objetivo que se entregaron mediante protopersonas.
          </p>
        </div>
      </div>
      <div className={styles.imageConteiner}>
        <div className="row-span-2 grid place-right">
          <ImageNext
            unoptimized
            src="/Images/benchmarkP.png"
            width={400}
            height={800}
            objectFit="contain"
          />
        </div>

        <ImageNext
          unoptimized
          src="/Images/matri.png"
          width={700}
          height={400}
        />

        <ImageNext
          unoptimized
          src="/Images/proto.png"
          width={800}
          height={400}
        //objectFit="contain"
        />
      </div>
      <div className={`${styles.boxProblem} ${styles.margin}`}>
        <div className={styles.roles}>
          <p>04</p>
          <h3>User Experience</h3>
        </div>
        <div>
          <p className={`${styles.description} ${styles.roles}`}>
            Basándome en los conocimientos recopilados durante las fases de inmersión
            y estrategia de diseño, seleccioné el sistema de diseño Material Design 3
            de Google para crear un sitio web atractivo, fácil de usar y que transmitiera calidez.
            La paleta de colores fue cuidadosamente elaborada, con espacios claros significativos e
            imágenes con miembros de la comunidad, creando una experiencia visual y emocionalmente
            cercana para los usuarios. Además optimizamos el sitio web con un enfoque mobile first,
            priorizando la experiencia en dispositivos móviles, e incluyendo también la visualización
            en tablets y portátiles, para ofrecer una experiencia excepcional a cada usuario.
          </p>
          <ul className={`${styles.description} ${styles.roles}`}>
            What I did:
            <li>・User Flows</li>
            <li>・Sitemap</li>
            <li>・Lo Fi and Hi Fi Wireframes</li>
            <li>・1:1 Usability Testing with team members and users</li>
          </ul>
        </div>
      </div>
      <div className="grid items-center grid-cols-2 mt-16;">
        <div className="row-span-2 grid place-right">
          <ImageNext
            unoptimized
            src="/Images/userFlow.png"
            width={400}
            height={800}
            objectFit="contain"
          />
        </div>
        <div className="mb-20">
          <ImageNext
            unoptimized
            src="/Images/sitemap.png"
            width={750}
            height={400}
          />
        </div>
        <ImageNext
          unoptimized
          src="/Images/styleguide.png"
          width={400}
          height={1000}
        //objectFit="contain"
        />
      </div>
      <div className="flex justify-between">
       <div className={styles.image}>
          <ImageNext
            unoptimized
            src="/Images/grid.png"
            width={400}
            height={700}
          />
        </div> 
        <div>
          <ImageNext
            unoptimized
            src="/Images/wireframe.png"
            width={1000}
            height={700}
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudyThree;
