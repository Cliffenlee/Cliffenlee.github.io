import Carousel from "../carousel/carousel";
import Intro from "../Intro/intro";
import Showcase from "../showcase/showcase";
import styles from "./content.module.css";
import Greeting from "../greeting/greeting";
import Landing from "../landing/landing";
import Contact from "../contact/contact";
import { useEffect, useState } from "react";

export default function Content({
  coverScrolled,
}: {
  coverScrolled: boolean;
}): JSX.Element {
  const [dynamicStyle, setStyle] = useState(`${styles.root} ${styles.loading}`);

  useEffect(() => {
    if (coverScrolled) {
      setTimeout(() => {
        console.log("set");
        setStyle(styles.root);
      }, 2000);
    }
  }, [coverScrolled]);
  return (
    <div className={`${dynamicStyle} ${styles.root}`}>
      <div className={styles.snap}>
        <Landing />
      </div>
      <div className={styles.snap}>
        <Greeting />
      </div>
      <div className={styles.snap}>
        <Intro />
      </div>
      <div className={styles.snap}>
        <Showcase />
      </div>
      <div className={styles.snap}>
        <Carousel />
      </div>
      <div className={styles.snap}>
        <Contact />
      </div>
    </div>
  );
}
