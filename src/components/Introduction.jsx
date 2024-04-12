import styles from "./Introduction.module.css";

function Introduction() {
  return (
    <>
      <div className={styles.introduction}>
        <div className={styles.text}>
          <h2>Hi!</h2>
          <div>
            <p>
              My name is <span className={styles.name}>Peter</span>
            </p>
          </div>
          <div>
            <p className={styles.welcomeText}>
              and welcome to my little slice of the internet!
              <br />
              If you had told me a few years ago that I'd be building my own website, I probably wouldn't have believed you. I've always been fascinated by the power of creation, but I never saw
              myself as particularly creative. Then, I stumbled upon front-end development, and it hit me: this can be a creative outlet too.
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
