import styles from "./modal.module.css";

export default function Modal({
  shown,
  setShown,
  title,
}: {
  shown: boolean;
  title: string;
  setShown: (a: boolean) => void;
}): JSX.Element {
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
