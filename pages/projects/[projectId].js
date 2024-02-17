import { useRouter } from "next/router";
import projectsList from "../../utils/projectsList";
import Layout from "../../components/Layout";
import ImageNext from "../../components/ImageNext";

const project = () => {
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

  return (
    <Layout>
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
    </Layout>
  );
};

export default project;
