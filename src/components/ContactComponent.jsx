import styles from "./ContactComponent.module.css";

function ContactComponent() {
  return (
    <div className={styles.contactContainer}>
      <div>You can reach me here</div>
      <div className={styles.contacts}>
        <p>EMAIL goes here</p>
        <p>LINKEDIN goes here</p>
        <p>GITHUB goes here</p>
      </div>
      <div>
        Or send me a message <strong>directly</strong>
      </div>
    </div>
  );
}

export default ContactComponent;
