import styles from "./Homepage.module.css";
import Image from "../components/Image";
import Navigation from "../components/Navigation";

export default function Homepage() {
  return (
    <div className={styles.homepage}>
      <Navigation />
      <Image />
    </div>
  );
}
