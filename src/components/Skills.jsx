import Skill from "./Skill";
import styles from "./Skills.module.css";

const skills = ["HTML", "CSS", "JavaScript", "SCSS", "Git", "GitHub", "Linux", "MySQL", "MS Office"];

function Skills() {
  return (
    <>
      <h3 className={styles.skillsText}>Skills</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatibus vero quaerat.</p>
      <div className={styles.skillGrid}>
        {skills.map((skill, i) => (
          <Skill skillName={skill} key={i} />
        ))}
      </div>
      <div>
        <p>And currently I'm learning: React</p>
      </div>
    </>
  );
}

export default Skills;
