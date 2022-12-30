import { useEffect, useState } from "react";
import styles from "./menu.module.css";
import Content from "../content/content";

export default function Menu({ mounted }: { mounted: boolean }): JSX.Element {
  useEffect(() => {
    console.log(mounted);
  }, [mounted]);
  return (
    <div
      className={`${mounted ? styles.shrink : styles.initial} ${
        styles.flexCenter
      }`}
    >
      <h1 className={styles.menuItem}>About Me</h1>
      <h1 className={styles.menuItem}>Projects</h1>
      <h1 className={styles.menuItem}>Contact</h1>
    </div>
  );
}
