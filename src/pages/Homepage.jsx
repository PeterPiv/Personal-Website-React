import styles from "./Homepage.module.css";
import Image from "../components/Image";
import Navigation from "../components/Navigation";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <div className={styles.homepage}>
      <Navigation />
      <Image />
      <Introduction />
      <Skills />
      <Footer />
    </div>
  );
}
