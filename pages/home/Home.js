import { useState } from "react";
import Modal from "../../components/Modal";
import Layout from "../../components/Layout";
import styles from "./styles.module.scss";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(true);

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <Layout title="Home">
      <h1>Home</h1>
      {modalOpen && <Modal handleClose={handleClose} />}
    </Layout>
  );
};

export default Home;
//TODOS LOS ARCHIVOS TIENEN QUE TENER UNA LINEA VACIA ABAJO
