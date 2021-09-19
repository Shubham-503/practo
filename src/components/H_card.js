import React from "react";
import styles from "./H_card.module.css";
import doctor from "../assets/doctor-online.png";
import findDoctor from "../assets/find-doctors-2.png";

function H_card() {
  return (
    <div className={styles.h_card}>
      <img
        className={styles.h_card__image}
        src={findDoctor}
        alt="image"
        srcset=""
      />
      <img
        className={styles.h_card__image}
        src={doctor}
        alt="image"
        srcset=""
      />
    </div>
  );
}

export default H_card;
