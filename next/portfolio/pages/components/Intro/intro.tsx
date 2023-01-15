import styles from "./intro.module.css";

export default function Intro({}: {}): JSX.Element {
  return (
    <div className={styles.root}>
      <div>
        <svg
          className={styles.svg}
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 16 16"
        >
          <g>
            <circle className={styles.st0} cx="8" cy="8" r="7.99" />
            <path
              d="M8,0.02c4.4,0,7.98,3.58,7.98,7.98S12.4,15.98,8,15.98S0.02,12.4,0.02,8S3.6,0.02,8,0.02 M8,0C3.58,0,0,3.58,0,8
		s3.58,8,8,8s8-3.58,8-8S12.42,0,8,0L8,0z"
            />
          </g>
          <line className={styles.st1} x1="8" y1="0" x2="8" y2="13" />
          <polygon className={styles.st1} points="8,0 1.75,13 14.25,13 " />
        </svg>
      </div>
      <div className={styles.text}>
        <div className={styles.bigFont}>HEY! MY</div>
        <div className={`${styles.bigFont} ${styles.middle}`}>NAME IS JEFF</div>
        <div className={`${styles.bigFont} ${styles.middle}`}>A FIRST-YEAR</div>
        <div className={`${styles.bigFont} ${styles.middle}`}>ARCHITECTURE</div>
        <div className={styles.bigFont}>STUDENT FROM NUS.</div>
      </div>
    </div>
  );
}
