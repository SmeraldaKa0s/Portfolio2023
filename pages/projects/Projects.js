import Layout from "../../components/Layout";
import styles from "./styles.module.scss";
import projectsList from "../../utils/projectsList";
import Link from "next/link";
import Card from "../../components/Card";

const Projects = () => {
  return (
    <Layout title="Projects">
      <section className={styles.container}>
        <h1>Projects</h1>
        <h2 className={styles.caption}>Some projects explained in details</h2>

        {projectsList.map((project, index) => {
          return (
            <Link key={index} href={`/projects/${[project.id]}`}>
              <Card
                year={project.year}
                title={project.title}
                image={project.image}
                caption={project.caption}
              />
            </Link>
          );
        })}
      </section>
    </Layout>
  );
};

export default Projects;
