import { useEffect } from "react";
import styles from "./modal.module.css";

const projects = [
  {
    imageURI: "/images/1.png",
  },
];

export default function Modal({
  shown,
  setShown,
  title,
}: {
  shown: boolean;
  title: string;
  setShown: (a: boolean) => void;
}): JSX.Element {
  useEffect(() => {
    console.log(shown);
  }, [shown]);
  return (
    <div
      className={`${styles.root} ${!shown && styles.hide}`}
      onClick={(e) => {
        setShown(false);
        e.stopPropagation();
      }}
    >
      <div
        className={styles.modalContent}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  );
}
