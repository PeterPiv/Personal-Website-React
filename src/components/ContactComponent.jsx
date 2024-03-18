import styles from "./ContactComponent.module.css";

function ContactComponent() {
  return (
    <div className={styles.contactContainer}>
      <div>You can reach me here</div>
      <div className={styles.contacts}>
        <p>
          <a href="mailto:pivonpeter@gmail.com">Email</a>
        </p>
        <p>
          <a href="https://hu.linkedin.com/in/peter-pivon-9036a8276">LinkedIn</a>
        </p>
        <p>
          <a href="https://github.com/PeterPiv">GitHub</a>
        </p>
      </div>
      <div>
        Or send me a message <strong>directly</strong>
      </div>
    </div>
  );
}

export default ContactComponent;
