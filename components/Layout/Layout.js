import Head from "next/head";
import styles from "./styles.module.scss";
import Nav from "../Nav";
import Footer from "../Footer";
import CursorFilter from "../CursorFilter";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>Alekxa | {title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CursorFilter />
      <div className={styles.container}>
        <Nav />
        <main>{children}
        </main>
        <Footer />
      </div>
    </>
  );
};

Layout.defaultProps = {
  title: "",
  description: "",
};

export default Layout;
