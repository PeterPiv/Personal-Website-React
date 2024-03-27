import styles from "./Skill.module.css";

function Skill({ skillName }) {
  return (
    <div className={styles.skill}>
      <span className={styles.skill}>{skillName}</span>
    </div>
  );
}

export default Skill;
