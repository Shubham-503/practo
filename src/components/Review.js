import React from "react";
import styles from "./Review.module.css";

function Review() {
  return (
    <div className={styles.review}>
      <h2>What our users have to say</h2>
      <p>
        Very easy to book, maintain history.
        <br /> Hassle free from older versions of booking appointment via
        telephone.
        <br />
        Thanks Practo for making it simple.
      </p>
      <br />
      <small>
        <strong> 👤 Jyoti Bhatia</strong>
      </small>
    </div>
  );
}

export default Review;
