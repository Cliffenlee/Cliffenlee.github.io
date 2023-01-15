import styles from "./cover.module.css";

export default function Cover({
  coverScrolled,
  setCoverScrolled,
}: {
  coverScrolled: boolean;
  setCoverScrolled: (scrolled: boolean) => void;
}): JSX.Element {
  const handleWheel = (event: { deltaY: number }) => {
    event.deltaY > 0 && console.log("scrolled");
    event.deltaY > 0 && setCoverScrolled(true);
  };

  return (
    <div onWheel={handleWheel}>
      <div
        className={`${!coverScrolled && styles.title} ${
          coverScrolled && styles.colorChange
        }`}
      >
        JL
      </div>
      <div className={`${styles.root} ${coverScrolled && styles.fadeUp}`}>
        <div className={styles.subtitle}>
          <div className={styles.name}>JEFF LEE JUN YAN</div>
          <div className={styles.caption}>DESIGN PORTFOLIO</div>
        </div>
      </div>
    </div>
  );
}
