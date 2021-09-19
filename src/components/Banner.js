import React from "react";
import styles from "./Banner.module.css";
import banner from "../assets/banner.png";

function Banner() {
  return (
    <div className={""}>
      <img className={styles.banner} src={banner} alt="" srcset="" />
    </div>
  );
}

export default Banner;
