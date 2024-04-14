import { NavLink } from "react-router-dom";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <div className={styles.container}>
      <h2 className={styles.pageNotFoundText}>That page does not exist. </h2>
      <p className={styles.backToHome}>
        Go back to the homepage:
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
      </p>
    </div>
  );
}

export default PageNotFound;
