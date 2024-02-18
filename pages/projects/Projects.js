import Layout from "../../components/Layout";
import styles from "./styles.module.scss";
import projectsList from "../../utils/projectsList";
import Link from "next/link";
import CardProject from "../../components/CardProject";
import { useEffect, useState, useRef } from "react";

const Projects = () => {
  const containerRef = useRef(null);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const { scrollTop, clientHeight, scrollHeight } = container;
      if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoading) {
        loadMoreProjects();
      }
    }
  };

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

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    loadMoreProjects();
  }, []);

  return (
    <Layout title="Projects">
      <section className={styles.container}>
        {/*   <h1>Projects</h1>
        <h2 className={styles.caption}>Some projects explained in details</h2> */}
        <div
          ref={containerRef}
          className={styles.projects}
        >
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
