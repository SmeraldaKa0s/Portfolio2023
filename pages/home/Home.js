import { useState, useEffect } from "react";
import Modal from "../../components/Modal";
import Layout from "../../components/Layout";
import styles from "./styles.module.scss";
import Header from "../../components/Header";
import projectsList from "../../utils/projectsList";
import Link from "next/link";
import CardHome from "../../components/CardHome/CardHome";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/Images/UI.svg",
    "/Images/DESIGNER.svg",
    "/Images/RESEARCHER.svg",
    "/Images/hello.svg",
    "/Images/work.svg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        if (prevIndex === images.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 1500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Layout title="Home">
      <Header
        image={images[currentImageIndex]}
        caption={
          <span>
            <strong>Alexandra</strong> is a versatile professional with a
            background in UX/UI Design, UX Research and Frontend Development.
            Interesed about making distinctive experiences.
          </span>}
        className={styles.container}
        story="Keep reading"
      />
      <section className={styles.container}>
        <h1 className={styles.boxProject}>
          Selected Projects
        </h1>

        <div className={styles.projects}>
          {projectsList.map((project, index) => {
            return (
              <Link
                key={index}
                href={`/projects/${project.id}`}
                passHref
                legacyBehavior
              >
                <a>
                  <CardHome
                    number={project.number}
                    title={project.title}
                    image={project.image}
                    caption={project.caption}
                    titleClassName="text-2xl whitespace-nowrap"
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

export default Home;
