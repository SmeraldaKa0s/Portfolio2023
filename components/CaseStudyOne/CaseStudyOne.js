import styles from "./styles.module.scss";
import ImageNext from "../../components/ImageNext";

const CaseStudyOne = ({ project }) => {
    return (
      <div>
         <h2>{project.title}</h2>
        <p>Year: {project.year}</p>
        <p>Caption: {project.caption}</p>
        <ImageNext
          src={project.image}
          alt={project.title}
          width={600}
          height={550}
        />
      </div>
    );
  };
  
  export default CaseStudyOne;