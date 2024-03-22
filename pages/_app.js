import "../styles/globals.scss";
import { BackgroundGradientAnimation } from "../components/background-gradient-animation";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <BackgroundGradientAnimation containerClassName="fixed top-0 left-0 z-10 saturate-[.3] brightness-[.4]" gradientBackgroundStart="black" gradientBackgroundEnd="black" />
      <div className="relative z-20">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
