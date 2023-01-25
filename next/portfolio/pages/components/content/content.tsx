import Carousel from "../carousel/carousel";
import Intro from "../Intro/intro";
import Showcase from "../showcase/showcase";
import styles from "./content.module.css";
import Greeting from "../greeting/greeting";
import Landing from "../landing/landing";
import Contact from "../contact/contact";
import { useEffect, useState } from "react";
import Scroll from "../scroll/scroll";

export default function Content({
  coverScrolled,
}: {
  coverScrolled: boolean;
}): JSX.Element {
  const [dynamicStyle, setStyle] = useState(`${styles.root} ${styles.loading}`);

  useEffect(() => {
    if (coverScrolled) {
      setTimeout(() => {
        setStyle(styles.root);
      }, 2000);
    }
  }, [coverScrolled]);

  return (
    <div className={`${dynamicStyle} ${styles.root}`}>
      <div>
        <Landing />
      </div>
      <div>
        <Greeting />
      </div>
      <div>
        <Intro />
      </div>
      <div>
        <Showcase />
      </div>
      <div>
        <Carousel />
      </div>
      <Scroll coverScrolled={coverScrolled} key={coverScrolled ? 1 : 0} />
      <div>
        <Contact />
      </div>
    </div>
  );
}
