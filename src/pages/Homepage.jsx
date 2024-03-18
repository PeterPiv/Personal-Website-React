import styles from "./Homepage.module.css";
import Image from "../components/Image";

export default function Homepage() {
  return (
    <div className={styles.homepage}>
      <Image />
    </div>
  );
}
