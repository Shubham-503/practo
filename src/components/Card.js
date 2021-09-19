import React from "react";
// import styles from "./Card.module.css";
import "./Card.css";

function Card({ image, title, desc, topic }) {
  return (
    <div className="card">
      <img className="image" src={image} alt="" />
      <small>{topic}</small>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default Card;
