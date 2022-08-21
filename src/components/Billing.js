import React, { useState } from "react";
import Card from "./UI/Card";
import styles from "./Billing.module.css";
import data from "../data";
import Detail from "./Detail";

function Billing() {
  const [detailPrice, setDetailPrice] = useState(0);
  const [detailTitle, setDetailTitle] = useState("");

  const content = data.map((item) => {
    const selectionHandler = (id, title) => {
      setDetailPrice(id);
      setDetailTitle(title);
    };

    return (
      <Card
        key={item.id}
        badge={item.badge}
        title={item.title}
        message={item.message}
        price={item.price}
        onSelect={selectionHandler}
      />
    );
  });

  return (
    <main>
      <div className={styles.billing}>
        <h1 className={styles.title}>Billing & Accounts</h1>
        {content}
      </div>
      <Detail price={detailPrice} title={detailTitle} />
    </main>
  );
}

export default Billing;
