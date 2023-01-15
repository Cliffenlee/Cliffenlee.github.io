import Image from "next/image";
import styles from "./showcase.module.css";

export default function Showcase({}: {}): JSX.Element {
  return (
    <div className={styles.root}>
      <Image
        src="/images/showcase.png"
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: "100%", height: "80%", objectFit: "cover" }}
        alt="project showcase"
      />
      <div className={styles.description}>
        <div className={styles.smallFont}>FEATURED PROJECT</div>
        <div className={styles.smallFont}>PROJECT : FLOW</div>
        <div className={styles.smallFont}>
          PROJECT 4 : MODULAR EXPLORATION - FORM, FUNCTION & SPACE
        </div>
      </div>
    </div>
  );
}
