import "semantic-ui-css/semantic.min.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "./About";
import Projects from "./Projects";
import Resources from "./Resources";
import SplashScreen from "./SplashScreen";

function MyApp() {
  return (
    <>
      <Navbar />
      <SplashScreen />
      <About />
      <Projects />
      <Resources />
      <Footer />
    </>
  );
}

export default MyApp;
