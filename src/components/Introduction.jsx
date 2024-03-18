import styles from "./Introduction.module.css";

function Introduction() {
  return (
    <>
      <div className={styles.introduction}>
        <div className={styles.text}>
          <h2>Hello!</h2>
          <div>
            <p>
              My name is <span className={styles.name}>Peter</span>
            </p>
          </div>
          <div>
            <p className={styles.welcomeText}>
              and welcome to my personal website! I&#39;m an aspiring front-end developer, who&#39;s always happy to create something that makes life not only easier but more fun!
              <br />
              This is where I showcase some of my projects. Take a look around and if something catches your eye then don&#39;t hesitate about contacting me!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;
