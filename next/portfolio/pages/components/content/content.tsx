import styles from "./content.module.css";

export default function Content({
  mounted,
}: {
  mounted: boolean;
}): JSX.Element {
  return (
    <h1
      className={`${styles.flexCenter} ${
        mounted ? styles.expand : styles.initial
      }`}
    >
      This is content
    </h1>
  );
}
