import { useState } from "react";
import Modal from "../../components/Modal";
import Layout from "../../components/Layout";
import styles from "./styles.module.scss";
import Header from "../../components/Header";
import { useEffect } from "react";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/Images/hello.svg",
    "/Images/work.svg",
    "/Images/developer.svg",
    "/Images/creative.svg"
  ]

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
        caption="Hi! I'm Alexandra, a versatile professional with a background in UX Research, UX/UI Design, and Web Development.
         Interesed about making distinctive experiences."
        className={styles.container}
      />
    </Layout>
    
  );
};

export default Home;
