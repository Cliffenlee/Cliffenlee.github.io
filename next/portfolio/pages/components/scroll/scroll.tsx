import { Ref, useRef, useState } from "react";
import styles from "./scroll.module.css";

export default function Scroll({
  scrollRef,
  stickScroll,
  setStickScroll,
}): JSX.Element {
  const [count, setCount] = useState(0);
  const scrollHandler = (e) => {
    console.log(Math.ceil(e.target.scrollTop));
    if (e.target.scrollTop > 0) {
      return;
    }
    setCount(Math.ceil((e.target.scrollTop / e.target.clientHeight) * 29));
    Math.ceil((e.target.scrollTop / e.target.clientHeight) * 29) == 29 &&
      setStickScroll(false);
  };
  return (
    <div
      ref={scrollRef}
      className={styles.root + ` ${stickScroll ? styles.stick : ""}`}
      onScroll={scrollHandler}
    >
      <div className={styles.timeline}>
        <img
          className={styles.image}
          src={`/frames/frame_${count
            .toString()
            .padStart(2, "0")}_delay-0.03s.gif`}
        />
      </div>
    </div>
  );
}
