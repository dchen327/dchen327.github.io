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
    <>
      <Head>
        <title>David Chen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <SplashScreen />
      <About />
      <Projects />
      <Resources />
      <Footer />
    </>
  );
}

export default Home;

// export default function Home() {
//   return (
//     <div>
//       <Head>
//         <title>David Chen</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//     </div>
//   );
// }
