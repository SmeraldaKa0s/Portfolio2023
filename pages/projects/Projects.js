import Layout from "../../components/Layout";
import styles from "./styles.module.scss";
import projectsList from "../../utils/projectsList";
import Link from "next/link";
import CardProject from "../../components/CardProject";
import { useEffect, useState } from "react";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreProjects = () => {
    setIsLoading(true);

    const nextPageProjects = projectsList.slice(
      visibleProjects.length,
      visibleProjects.length + 3
    );

    setVisibleProjects((prevProjects) => [
      ...prevProjects,
      ...nextPageProjects,
    ]);

    setIsLoading(false);
  };

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    // Avoiding loading to many projects.
    if (scrollHeight > 20_000) {
      setVisibleProjects(projectsList)
      window.scrollTo({ top: 128, behavior: 'instant' })
    }

    if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoading) {
      loadMoreProjects();
    }
  };

  useEffect(() => {
    if (!window) return;
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  useEffect(() => {
    loadMoreProjects();
  }, []);

  return (
    <Layout title="Projects" config={{ fixedNav: true, fixedFooter: true }}>
      <section className={styles.container}>
        {/*   <h1>Projects</h1>
        <h2 className={styles.caption}>Some projects explained in details</h2> */}
        <div className={styles.projects}>
          {visibleProjects.map((project, index) => {
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
          {isLoading && <p>Loading more projects...</p>}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
