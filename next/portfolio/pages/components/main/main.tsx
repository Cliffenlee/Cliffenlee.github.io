import { useEffect } from "react";
import Content from "../content/content";
import Nav from "../nav/nav";
import styles from "./main.module.css";

export default function Main({
  coverScrolled,
}: {
  coverScrolled: boolean;
}): JSX.Element {
  useEffect(() => {
    console.log(coverScrolled);
  }, [coverScrolled]);
  return (
    <div
      className={`${styles.flexCenter} ${
        coverScrolled ? styles.root : styles.hidden
      }`}
    >
      {/* <Nav /> */}
      <Content />
    </div>
  );
}
