import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import LanguageSettings from "./LanguageSettings";
import { useState } from "react";

function Navigation() {
  const [isSettingsClicked, setIsSettingsClicked] = useState(false);

  function toggleSettings() {
    return setIsSettingsClicked(!isSettingsClicked);
  }

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <img src="../public/svg/cogwheel.svg" alt="" onClick={toggleSettings} />
        </li>
        {isSettingsClicked && <LanguageSettings />}
      </ul>
    </nav>
  );
}

export default Navigation;
