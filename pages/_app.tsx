import "semantic-ui-css/semantic.min.css";
import Navbar from "../components/Navbar";
import About from "./About";
import SplashScreen from "./SplashScreen";

function MyApp() {
  return (
    <>
      <Navbar />
      <SplashScreen />
      <About />
    </>
  );
}

export default MyApp;
