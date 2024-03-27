import styles from "./Homepage.module.css";
import Image from "../components/Image";
import Navigation from "../components/Navigation";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";

export default function Homepage() {
  return (
    <div className={styles.homepage}>
      <Navigation />
      <Image />
      <Introduction />
      <Skills />
    </div>
  );
}
