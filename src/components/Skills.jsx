import Skill from "./Skill";
import styles from "./Skills.module.css";

const skills = ["HTML", "CSS", "JavaScript", "SCSS", "Git", "GitHub", "Linux", "MS Word", "MS Excel"];

function Skills() {
  return (
    <>
      <h3>Skills</h3>
      <div className={styles.skillGrid}>
        {skills.map((skill, i) => (
          <Skill skillName={skill} key={i} />
        ))}
      </div>
    </>
  );
}

export default Skills;
