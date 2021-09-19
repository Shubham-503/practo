import React from "react";
import article1 from "../assets/article/article1.jpeg";
import article2 from "../assets/article/article2.jpeg";
import styles from "./Article.module.css";

function Article() {
  return (
    <div className={styles.article}>
      <div className={styles.article__left}>
        <h2>Read top articles from health experts</h2>
        <small>
          Health articles that keep you informed about good health practices and
          achieve your goals.
        </small>
        <button>See all articles</button>
      </div>

      <div className={styles.card}>
        <img className={styles.image} src={article1} alt="" />
        <br />
        <small>small</small>
        <h3>"title</h3>
        <p>"desc"</p>
      </div>
      <div className={styles.card}>
        <img className={styles.image} src={article2} alt="" />
        <br />
        <small>small</small>
        <h3>"title</h3>
        <p>"desc"</p>
      </div>
    </div>
  );
}

export default Article;
