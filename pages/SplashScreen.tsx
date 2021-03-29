import Image from "next/image";
import { bgWrap, bgText } from "../styles/Home.module.css";

export default function SplashScreen() {
  return (
    <>
      <div className={bgWrap}>
        <Image src="/images/background.jpg" layout="fill" />
      </div>
      <p className={bgText}>Text overlay?</p>
    </>
  );
}
