import "semantic-ui-css/semantic.min.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "./About";
import SplashScreen from "./SplashScreen";

function MyApp() {
  return (
    <>
      <Navbar />
      <SplashScreen />
      <About />
      <Footer />
    </>
  );
}

export default MyApp;
