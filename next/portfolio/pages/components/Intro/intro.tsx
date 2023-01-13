import styles from "./intro.module.css";

export default function Intro({}: {}): JSX.Element {
  return (
    <div className={styles.root}>
      <span className={styles.bigFont}>JEFF LEE JUN YAN</span>
      <span className={`${styles.hollowFont} ${styles.middle}`}>
        DIGITAL PORTFOLIO
      </span>
      <span className={styles.hollowFont}>SHOWCASE</span>
      <div className={styles.caption}>
        <div className={styles.smallFont}>
          A FIRST YEAR NATIONAL UNIVERSITY OF SINGAPORE ARCHITECTURE STUDENT’S
        </div>
        <div className={styles.smallFont}>
          PROJECTS, PERSONAL WORK AND SKILL SHOWCASE
        </div>
      </div>
    </div>
  );
}
