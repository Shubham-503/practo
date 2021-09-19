import React from "react";
import styles from "./Card_Consult.module.css";

function Card_Consult({ image, title }) {
  return (
    <div className={styles.card_consult}>
      <img className={styles.image} src={image} alt="consult" />
      <p>{title}</p>
      <p>Consult with us</p>
    </div>
  );
}

export default Card_Consult;
