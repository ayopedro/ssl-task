import React from "react";
import styles from "./Card.module.css";

export default function Card({ badge, title, message, price, onSelect }) {
  const selectHandler = () => {
    onSelect(price, title);
  }

  return (
    <div className={styles.card} onClick={selectHandler}>
      <div className={styles.img}>
        <div className={styles.badge}>{badge}</div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.heading}>{title}</h1>
        <p className={styles.message}>{message}</p>
        <div className={styles.pricing}>
          <small>For as low as</small>
          <p>
            <span>N{price} NGN</span> per employer
          </p>
        </div>
      </div>
    </div>
  );
}
