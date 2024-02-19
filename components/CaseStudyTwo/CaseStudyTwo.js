import styles from "./styles.module.scss";
import ImageNext from "../../components/ImageNext";

const CaseStudyTwo = ({ project }) => {
    return (
      <div>
         <h2>{project.title}</h2>
        <p>Year: {project.year}</p>
   
      
      </div>
    );
  };
  
  export default CaseStudyTwo;