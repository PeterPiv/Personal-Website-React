import styles from "./Homepage.module.css";
import Image from "../components/Image";
import Navigation from "../components/Navigation";
import Introduction from "../components/Introduction";

export default function Homepage() {
  return (
    <div className={styles.homepage}>
      <Navigation />
      <Image />
      <Introduction />
    </div>
  );
}
