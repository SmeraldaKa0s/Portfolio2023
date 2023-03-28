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
        caption="Hi! I'm Alekxandra a creative developer and digital designer student  from Argentina interesed about making distinctive experiences.  "
      />
      {/* {modalOpen && <Modal handleClose={handleClose} />} */}
    </Layout>
  );
};

export default Home;
