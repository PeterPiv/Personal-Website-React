import Skill from "./Skill";
import styles from "./Skills.module.css";

const skills = ["HTML", "CSS", "JavaScript", "SCSS", "Git", "Photshop", "Ubuntu"];

function Skills() {
  return (
    <div className={styles.skillGrid}>
      Skills
      {skills.map((skill, i) => (
        <Skill skillName={skill} key={i} />
      ))}
    </div>
  );
}

export default Skills;
