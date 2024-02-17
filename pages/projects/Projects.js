import Layout from "../../components/Layout";
import styles from "./styles.module.scss";
import projectsList from "../../utils/projectsList";
import Link from "next/link";
import CardProject from "../../components/CardProject";

const Projects = () => {
  return (
    <Layout title="Projects">
      <section className={styles.container}>
        {/*   <h1>Projects</h1>
        <h2 className={styles.caption}>Some projects explained in details</h2> */}
        <div>
          {projectsList.map((project, index) => {
            return (
              <Link
                key={index}
                href={`/projects/${project.id}`}
                passHref
                legacyBehavior
              >
                <a>
                <CardProject
                  number={project.number}
                  title={project.title}
                  image={project.image}
                  caption={project.caption}
                />
                </a>
              </Link>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
