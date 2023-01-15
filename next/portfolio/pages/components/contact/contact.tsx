import styles from "./contact.module.css";

export default function Contact({}: {}): JSX.Element {
  return (
    <div className={styles.root}>
      <div className={styles.bigFont}>CONTACT ME</div>
      <div className={`${styles.smallFont} ${styles.bold}`}>
        DROP ME A MESSAGE AND LET’S TALK SERIOUS BUSINESS.
      </div>
      <div className={styles.top}>
        <div className={styles.label}>NAME</div>
        <div className={styles.nameContainer}>
          <div>
            <input className={styles.nameInput} />
            <div className={`${styles.smallFont} ${styles.prompt}`}>
              FIRST NAME
            </div>
          </div>
          <div>
            <input className={styles.nameInput} />
            <div className={`${styles.smallFont} ${styles.prompt}`}>
              LAST NAME
            </div>
          </div>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.label}>EMAIL *</div>
        <input className={styles.emailInput} />
      </div>
      <div className={styles.bottomWrapper}>
        <div className={styles.label}>MESSAGE *</div>
        <input className={styles.textArea} />
      </div>
      <div className={styles.right}>
        <button
          className={styles.button}
          onClick={() => {
            console.log("clicked");
          }}
        >
          SEND
        </button>
      </div>
      <div className={styles.resources}>
        <div>
          <div className={styles.rightTitle}>EXTERNAL LINKS</div>
          <a
            href="https://www.linkedin.com/in/jeffleejy/"
            target="_blank"
            className={styles.link}
            rel="noreferrer"
          >
            LINKEDIN
          </a>
        </div>
        <div style={{ marginTop: "63px" }} className={styles.rightTitle}>
          <div>DOWNLOAD</div>
          <div>
            <a className={styles.link}>RESUME</a>
          </div>
          <div>
            <a className={styles.link}>PORTFOLIO</a>
          </div>
        </div>
      </div>
    </div>
  );
}
