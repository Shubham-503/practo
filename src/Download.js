import React from "react";
import image from "./assets/footer-img.png";
import appleButton from "./assets/apple_store.png";
import googlePlay from "./assets/google_play.png";
import styles from "./Download.module.css";

function Download() {
  return (
    <div className={styles.download}>
      <img className={styles.download__left} src={image} alt="image" />
      <div className={styles.download__right}>
        <h2>Download the Practo app</h2>
        <br />
        <small>
          Access video consultation with India’s top doctors on the Practo app.
          <br />
          Connect with doctors online, available 24/7, <br /> from the comfort
          of your home.
        </small>
        <br />
        <br />
        <br />
        <p>
          <strong> Get the link to download the app</strong>
        </p>
        <br />
        <div className={styles.form}>
          <input type="text" placeholder="Enter Phone Number" />
          <button>Send SMS</button>
        </div>
        <div>
          <img className={styles.link} src={appleButton} alt="" />
          <img className={styles.link} src={googlePlay} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Download;
