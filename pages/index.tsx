import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "./About";
import Projects from "./Projects";
import Resources from "./Resources";
import SplashScreen from "./SplashScreen";
import "semantic-ui-css/semantic.min.css";

function Home() {
  return (
    <main>
      <Head>
        <title>David Chen</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="David Chen" />
        <meta property="og:url" content="https://davidxchen.com" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Personal Portfolio Website" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/dchen327/dchen327.github.io/master/public/images/Tropical-sunset.png"
        />
      </Head>
      <Navbar children={<SplashScreen />} />
      {/* <SplashScreen /> */}
      <About />
      <Projects />
      <Resources />
      <Footer />
    </main>
  );
}

export default Home;
