import styles from "./Skill.module.css";

function Skill({ skillName }) {
  return (
    <div className={styles.skill}>
      {/* <img src={`../../public/svg/${skillName}.svg`} alt="" /> */}
      <span className={styles.skill}>{skillName}</span>
    </div>
  );
}

export default Skill;
