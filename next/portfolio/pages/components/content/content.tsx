import Carousel from "../carousel/carousel";
import Intro from "../Intro/intro";
import Showcase from "../showcase/showcase";
import styles from "./content.module.css";
import Greeting from "../greeting/greeting";
import Landing from "../landing/landing";
import Contact from "../contact/contact";
import { useEffect, useRef, useState } from "react";
import Scroll from "../scroll/scroll";

export default function Content({
  coverScrolled,
}: {
  coverScrolled: boolean;
}): JSX.Element {
  const [dynamicStyle, setStyle] = useState(`${styles.root} ${styles.loading}`);
  const scrollRef = useRef(null);
  const [stickScroll, setStickScroll] = useState(false);

  useEffect(() => {
    if (coverScrolled) {
      setTimeout(() => {
        console.log("set");
        setStyle(styles.root);
      }, 2000);
    }
  }, [coverScrolled]);

  const handleScroll = () => {
    // console.log(scrollRef.current?.getBoundingClientRect().top);
    !stickScroll &&
      scrollRef.current?.getBoundingClientRect().top <= 0 &&
      setStickScroll(true);
  };

  useEffect(() => {
    console.log(stickScroll);
  }, [stickScroll]);

  return (
    <div onScroll={handleScroll} className={`${dynamicStyle} ${styles.root}`}>
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
      <div>
        <Scroll
          setStickScroll={setStickScroll}
          scrollRef={scrollRef}
          stickScroll={stickScroll}
        />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}
