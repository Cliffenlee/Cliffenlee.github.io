import styles from "./intro.module.css";

export default function Intro({}: {}): JSX.Element {
  return (
    <div className={styles.root}>
      {/* <div className={styles.background}>
        JL
        </div> */}
      <div className={styles.intro}>
        <div>
          <span className={styles.greeting}>Hello!</span>
        </div>
        <div className={styles.name}>My name is Jeff.</div>
        <div className={styles.description}>
          I am a first year Architecture student from the National University of
          Singapore. Always hungry for knowledge, I am on the hunt for great
          opportunities to hone my expertise in design.
        </div>
      </div>
    </div>
  );
}
