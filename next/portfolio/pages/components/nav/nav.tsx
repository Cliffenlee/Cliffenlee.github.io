import { useEffect, useState } from "react";
import styles from "./nav.module.css";

export default function Nav(): JSX.Element {
  return (
    <div className={styles.root}>
      <div className={styles.menuItem}>About Me</div>
      <div className={styles.menuItem}>Work</div>
      <div className={styles.logo}>JL</div>
      <div className={styles.menuItem}>Resume</div>
      <div className={styles.menuItem}>Contact</div>
    </div>
  );
}
