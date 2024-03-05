import { useRouter } from "next/router";
import projectsList from "../../utils/projectsList";
import Layout from "../../components/Layout";
import ImageNext from "../../components/ImageNext";
import CaseStudyOne from "../../components/CaseStudyOne";
import CaseStudyTwo from "../../components/CaseStudyTwo";
import CaseStudyThree from "../../components/CaseStudyThree";

const Project = () => {
  const projectComponents = {
    "ia-olfativa": CaseStudyOne,
    "fireboard": CaseStudyTwo,
    "primavera": CaseStudyThree,
  };
  
  const router = useRouter();
  const { projectId } = router.query;
  const project = projectsList.find((project) => project.id === projectId);
  if (!project) {
    return (
      <Layout title="Projects">
        <div>
          <h2>Project not found</h2>
        </div>
      </Layout>
    );
  }

  const ProjectComponent = projectComponents[project.id];

  return (
    <Layout title={project.title}>
      <section>
        <ProjectComponent project={project} />
      </section>
    </Layout>
  );
};

export default Project;
