import React, { useState } from "react";
import Modal from "../modal/modal";
import styles from "./carouselItem.module.css";

export default function CarouselItem({
  children,
  id,
  name,
}: {
  children: React.ReactNode;
  id: number;
  name: string;
}): JSX.Element {
  const [shown, setShown] = useState(false);
  return (
    <div
      className={styles.carouselItem}
      onClick={() => {
        console.log("setting true");
        setShown(true);
      }}
    >
      <Modal title={name} shown={shown} setShown={setShown} />
      {children}
      <div>
        <div className={styles.projectNumber}>PROJECT {id}</div>
        <div className={styles.projectName}>{name}</div>
      </div>
    </div>
  );
}
