import styles from "./styles.module.scss";
import ImageNext from "../../components/ImageNext";

const CaseStudyThree = ({ project }) => {
    return (
      <div className={`${styles.margin} ${styles.container}`}>
            <p>CONSTRUCTION CASE STUDY</p>
    
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
      </div>
    );
  };
  
  export default CaseStudyThree;