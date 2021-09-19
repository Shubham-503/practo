import React from "react";
import styles from "./Header.module.css";
import practo from "../assets/practo.svg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        {/* logo */}
        <ul className={styles.header__list}>
          <li>
            <img className={styles.image} src={practo} alt="" srcset="" />
          </li>
          <li>
            <div className={styles.header__menu}>
              <p className={styles.bold}>Doctors</p>
              <p className={styles.faded}>Book an appointment</p>
            </div>
          </li>
          <li>
            <div className={styles.header__menu}>
              <p className={styles.bold}>Doctors</p>
              <p className={styles.faded}>Book an appointment</p>
            </div>
          </li>
          <li>
            <div className={styles.header__menu}>
              <p className={styles.bold}>Doctors</p>
              <p className={styles.faded}>Book an appointment</p>
            </div>
          </li>
        </ul>
        {/* 4 other menus with sub text */}
      </div>
      <div className="header__right">
        {/* 3 dropdown menu */}
        <ul className={styles.header__list}>
          <li>
            <div className={`${styles.header__menu} ${styles.vcenter}`}>
              <select name="For Providers" className={styles.faded}>
                <option value="Practo Prime">Practo Prime</option>
                <option value="Software for providers">
                  Software for providers
                </option>
                <option value="List you practice for free">
                  List you practice for free
                </option>
                <option value="Corporate wellness">Corporate wellness</option>
              </select>
            </div>
          </li>
          <li>
            <div className={`${styles.header__menu} ${styles.vcenter}`}>
              <select name="security & help" className={styles.faded}>
                <option value="Data Security">Data Security</option>
                <option value="Help">Help</option>
              </select>
            </div>
          </li>
          <li>
            <div className={`${styles.header__menu} ${styles.vcenter}`}>
              <span>Login/Signup</span>
            </div>
          </li>
        </ul>
        {/* Button */}
      </div>
    </header>
  );
}

export default Header;
