import styles from "./ContactComponent.module.css";

function ContactComponent() {
  return (
    <div className={styles.contactContainer}>
      <div>You can reach me here</div>
      <div className={styles.contacts}>
        <p>
          <a href="https://hu.linkedin.com/in/peter-pivon-9036a8276" target="_blank">
            LinkedIn
          </a>
        </p>
        <p>
          <a href="https://github.com/PeterPiv" target="_blank">
            GitHub
          </a>
        </p>
      </div>
      <div>
        Or send me a message <strong>directly</strong>
        <p className={styles.email}>
          <a href="mailto:pivonpeter@gmail.com">Email</a>
        </p>
      </div>
    </div>
  );
}

export default ContactComponent;
