import React from "react";
import Card_Consult from "./Card_Consult";
import styles from "./Consult.module.css";
import Acne from "../assets/consult/Acne.png";
import mentalWellness from "../assets/consult/12-mental-wellness.png";

function Consult({ button }) {
  return (
    <div className={styles.consult}>
      <div className={styles.consult__title}>
        <div className={styles.consult__title__left}>
          <h3>Consult top doctors online for any health concern</h3>
          <p>
            Private online consultations with verified doctors in all
            specialists
          </p>
        </div>
        {/* <div className={styles.middle}></div> */}
        {button && (
          <p className={styles.consult__title__right}>View all specialities</p>
        )}
      </div>
      <div className={styles.consult__cards}>
        <Card_Consult image={Acne} title={"Acne, pimples ans skin issues"} />
        <Card_Consult image={mentalWellness} title={"Child not feeling well"} />
        <Card_Consult image={mentalWellness} title={"Child not feeling well"} />
        <Card_Consult image={mentalWellness} title={"Child not feeling well"} />
        <Card_Consult image={mentalWellness} title={"Child not feeling well"} />
        <Card_Consult image={mentalWellness} title={"Child not feeling well"} />
      </div>
    </div>
  );
}

export default Consult;
