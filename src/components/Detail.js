import React from "react";
import styles from "./Detail.module.css"

function Detail({price, title}) {
  return (
    <aside className={styles.detail}>
      <div>
        <h1 className={styles.logo}>CloudletHR</h1>
        <p>
          Industry tested no1 software solution for modern human resource
          providers over the world
        </p>
      </div>
      <div className={styles.title}>{title}</div>
      <div>
        <div className={styles.topText}><p>Paying</p></div>
        <div className={styles.price}><p>N {price} NGN</p></div>
        <small>for 300 employees</small>
      </div>
      <div>
        <button>Make Payment</button>
      </div>
    </aside>
  );
}

export default Detail;
