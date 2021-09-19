import React from "react";
import styles from "./Footer.module.css";
import logo from "../assets/white_practo_logo.svg";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__section}>
          <p>
            <strong>Practo</strong>
          </p>

          <small>Blog</small>
          <small>Careers</small>
          <small>Press</small>
          <small>Contact Us</small>
        </div>
        <div className={styles.footer__section}>
          <p>
            <strong>For patients</strong>
          </p>

          <small>Search for doctors</small>
          <small>Search for clinics</small>
          <small>Search for hospitals</small>
          <small>Book diagnostic Tests </small>
          <small>Book Full Body Checkup</small>
          <small>Practo Plus</small>
          <small>Read health articles</small>
          <small>Read about medicines</small>
          <small>Practo drive</small>
          <small>Health app</small>
        </div>
        <div className={styles.footer__section}>
          <p>
            <strong>For Doctors</strong>
          </p>

          <small>Practo Profile</small>
          <br />
          <p>
            <strong>For Clinics</strong>
          </p>
          <small>Ray by Practo</small>
          <small>Practo Reach</small>
          <small>Ray Tab</small>
          <small>practo Pro</small>
        </div>
        <div className={styles.footer__section}>
          <p>
            <strong>For Hospitals</strong>
          </p>
          <small>Insta by Practo</small>
          <small>Qikwell by Practo</small>
          <small>Practo Profile</small>
          <small>Practo Reach</small>
          <small>Practo Drive</small>
        </div>
        <div className={styles.footer__section}>
          <p>
            <strong>More</strong>
          </p>
          <small>Help</small>
          <small>Developers</small>
          <small>Privacy Policy</small>
          <small>Terms & Conditions</small>
          <small>Healthcare Directory</small>
          <small>Practo Health Wiki</small>
          <small>Corporate Wellness</small>
        </div>
        <div className={styles.footer__section}>
          <p>
            <strong> Social </strong>
          </p>
          <small>Facebook</small>
          <small>Twitter</small>
          <small>Linkedin</small>
          <small>Youtube</small>
          <small>Github</small>
        </div>
      </footer>
      <footer className={styles.footer__logo}>
        <img src={logo} alt="" />
        <br />
        <small>Copyright © 2017, Practo. All rights reserved.</small>
      </footer>
    </>
  );
}

export default Footer;
