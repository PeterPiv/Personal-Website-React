import styles from "./Introduction.module.css";

function Introduction() {
  return (
    <div className={styles.introduction}>
      <h2>Hello!</h2>
      <span>I&#39;m</span>
      <span className={styles.name}>Peter</span>
    </div>
  );
}

export default Introduction;
