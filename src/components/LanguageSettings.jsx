import styles from "./LanguageSettings.module.css";

function LanguageSettings() {
  return (
    <div className={styles.settingsMenu}>
      <p>Change the language:</p>
      <div className={styles.languages}>
        <p>English</p>
        <p>Hungarian</p>
      </div>
    </div>
  );
}

export default LanguageSettings;
