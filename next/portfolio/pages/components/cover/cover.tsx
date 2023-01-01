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
    <div
      className={`${styles.root} ${coverScrolled && styles.fadeUp}`}
      onWheel={handleWheel}
    >
      <div className={styles.title}>JL</div>
      <div className={`${styles.subtitle} ${styles.name}`}>
        JEFF LEE JUN YAN
      </div>
      <div className={`${styles.subtitle} ${styles.caption}`}>
        DESIGN PORTFOLIO
      </div>
    </div>
  );
}
