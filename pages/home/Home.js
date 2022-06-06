import { useState } from "react";
import Modal from "../../components/Modal";
import Layout from "../../components/Layout";
import styles from "./styles.module.scss";
import Header from "../../components/Header";


const Home = () => {
  const [modalOpen, setModalOpen] = useState(true);

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <Layout title="Home">
      <Header 
      image="/Images/belaLugosi.jpeg"
      caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. 
      eiusmod  tempor incididunt ut labore et labore. "/>
      {modalOpen && <Modal handleClose={handleClose} />}
    </Layout>
  );
};

export default Home;
//TODOS LOS ARCHIVOS TIENEN QUE TENER UNA LINEA VACIA ABAJO
