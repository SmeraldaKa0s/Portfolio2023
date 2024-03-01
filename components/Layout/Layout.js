import Head from "next/head";
import styles from "./styles.module.scss";
import Nav from "../Nav";
import Footer from "../Footer";
import CursorFilter from "../CursorFilter";

const Layout = ({ title, description, config, children }) => {
  const { fixedNav, fixedFooter } = config || {};

  return (
    <>
      <Head>
        <title>Alexa | {title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     {/*  <CursorFilter /> */}
      <div className={styles.container}>
        <Nav fixed={fixedNav} />
        <main>{children}
        </main>
        <Footer fixed={fixedFooter} />
      </div>
    </>
  );
};

Layout.defaultProps = {
  title: "",
  description: "",
};

export default Layout;
