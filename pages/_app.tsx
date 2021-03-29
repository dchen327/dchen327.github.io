import "semantic-ui-css/semantic.min.css";
import Navbar from "../components/Navbar";
import About from "./About";
import SplashScreen from "./SplashScreen";

function MyApp() {
  return (
    <div>
      <Navbar />
      <SplashScreen />
      <About />
    </div>
  );
}

export default MyApp;
