import { useRouter } from "next/router";
import projectsList from "../../utils/projectsList";
import Layout from "../../components/Layout";
import ImageNext from "../../components/ImageNext";
import CaseStudyOne from "../../components/CaseStudyOne";
import CaseStudyTwo from "../../components/CaseStudyTwo";

const Project = () => {
  const projectComponents = {
    "movie-finder": CaseStudyOne,
    "pokemon-tft": CaseStudyTwo,
  };
  
  const router = useRouter();
  const { projectId } = router.query;
  const project = projectsList.find((project) => project.id === projectId);
  if (!project) {
    return (
      <Layout>
        <div>
          <h2>Project not found</h2>
        </div>
      </Layout>
    );
  }

  const ProjectComponent = projectComponents[project.id];

  return (
    <Layout>
      <section>
        <ProjectComponent project={project} />
      </section>
    </Layout>
  );
};

export default Project;
