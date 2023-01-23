import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Ref, useEffect, useRef, useState } from "react";
import { render } from "react-dom";
import styles from "./scroll.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Scroll({
  scrollRef,
  stickScroll,
  setStickScroll,
}): JSX.Element {
  //   const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     const images = [];

  //     for (let i = 0; i < 30; i++) {
  //       const image = document.createElement("img");
  //       image.src = `/frames/frame_${count
  //         .toString()
  //         .padStart(2, "0")}_delay-0.03s.png`;
  //       images.push(image);
  //     }

  //     const imagesInfo = {
  //       currentFrame: 0,
  //       images,
  //     };

  //     const render = () => {
  //       console.log(imagesInfo.currentFrame);
  //       console.log(imagesInfo.images[0]);
  //       scrollRef.current
  //         .getContext("2d")
  //         .drawImage(imagesInfo.images[0], 0, 0, 100, 100);
  //     };
  //     // gsap.registerPlugin(ScrollTrigger);
  //     // gsap.to(imagesInfo, {
  //     //   snap: "currentFrame",
  //     //   ease: "none",
  //     //   onUpdate: render,
  //     //   scrollTrigger: {
  //     //     trigger: scrollRef.current,
  //     //     start: "top",
  //     //     markers: true,
  //     //   },
  //     // });
  //     render();
  //   }, []);

  //   // const scrollHandler = (e) => {
  //   //   console.log(Math.ceil(e.target.scrollTop));
  //   //   // if (e.target.scrollTop > 0) {
  //   //   //   return;
  //   //   // }
  //   //   setCount(Math.floor((e.target.scrollTop / e.target.clientHeight) * 29));
  //   //   Math.ceil((e.target.scrollTop / e.target.clientHeight) * 29) == 29 &&
  //   //     setStickScroll(false);
  //   // };
  //   return (
  //     // <div
  //     //   ref={scrollRef}
  //     //   className={
  //     //     styles.root
  //     //     //  + ` ${stickScroll ? styles.stick : ""}`
  //     //   }
  //     //   onScroll={scrollHandler}
  //     // >
  //     //   <div className={styles.timeline}>
  //     //     <img
  //     //       className={styles.image}
  //     //       src={`/frames/frame_${count
  //     //         .toString()
  //     //         .padStart(2, "0")}_delay-0.03s.gif`}
  //     //     />
  //     //   </div>
  //     // </div>
  //     <div className={styles.root}>
  //       <canvas className={styles.canvas} ref={scrollRef} />
  //     </div>
  //   );
  // }

  const canvasRef = useRef(null);
  const images = [];

  for (let i = 0; i < 30; i++) {
    images.push(
      `/frames/frame_${i.toString().padStart(2, "0")}_delay-0.03s.png`
    );
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const img = canvasRef.current.children;

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const imagesInfo = {
      
    }

    const render = () => {
      context.drawImage(
        img[0],
        0,
        0,
        img[0].width,
        img[0].height
        // 0,
        // 0,
        // canvas.width,
        // canvas.height
      );
    };

    render();

    gsap.to(imagesIn, {
      scrollTrigger: "images",
      start: `+=${index * 100}`,
      end: `+=${(index + 1) * 100}`,
      toggleActions: "play none none reverse",
      autoAlpha: 1,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className={styles.root}>
      <canvas ref={canvasRef}>
        {images.map((image, index) => (
          <img key={index} src={image} alt="image" className={styles.image} />
        ))}
      </canvas>
    </div>
  );
}
