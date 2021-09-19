import React from "react";
import Card from "./Card";
import styles from "./Appointment.module.css";
import dentist from "../assets/appointment/sp-dentist@2x.jpeg";

function Appointment() {
  return (
    <div className={styles.appointment}>
      <div className={styles.appointment__title}>
        <h3>Book an appointment for an in-clinic consultation</h3>
        <p>Find experienced doctors across all specialties</p>
      </div>
      <div className={styles.appointment__cards}>
        <Card
          image={dentist}
          title={"dentist"}
          desc={"Teething troubles? Schedule a dental checkup"}
        />
        <Card
          image={dentist}
          title={"dentist"}
          desc={"Teething troubles? Schedule a dental checkup"}
        />
        <Card
          image={dentist}
          title={"dentist"}
          desc={"Teething troubles? Schedule a dental checkup"}
        />
        <Card
          image={dentist}
          title={"dentist"}
          desc={"Teething troubles? Schedule a dental checkup"}
        />
      </div>
    </div>
  );
}

export default Appointment;
