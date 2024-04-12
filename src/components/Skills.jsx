import Skill from "./Skill";
import styles from "./Skills.module.css";

const skills = ["HTML", "CSS", "JavaScript", "SCSS", "Git", "GitHub", "Linux", "MS Word", "MS Excel"];

function Skills() {
  return (
    <>
      <h3 className={styles.skillsText}>Skills</h3>
      <p>I learnt the basics of Front-end web development from a Udemy course. </p>
      <div className={styles.skillGrid}>
        {skills.map((skill, i) => (
          <Skill skillName={skill} key={i} />
        ))}
      </div>
    </>
  );
}

export default Skills;
