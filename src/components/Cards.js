import React from "react";
import styles from "./Cards.module.css";
import coronavirus from "../assets/coronavirus.png";
import swasthcard from "../assets/swasth-card-2.png";
import covid19Home from "../assets/covid_19_home.png";

function Cards() {
  return (
    <>
      <h2 className={styles.title}>
        How Practo is Helping India Fight COVID-19
      </h2>
      <div className={styles.cards}>
        <img className={styles.image} src={covid19Home} alt="" srcset="" />
        <img className={styles.image} src={swasthcard} alt="" srcset="" />
        <img className={styles.image} src={coronavirus} alt="" srcset="" />
      </div>
    </>
  );
}

export default Cards;
