import React, { useEffect, useRef, useState } from "react";
import Modal from "../modal/modal";
import styles from "./carouselItem.module.css";

export default function CarouselItem({
  children,
  id,
  name,
  clickable,
  offsetX,
  setClickable,
  setShown,
  setSelectedProject,
  centerPoint,
}: {
  children: React.ReactNode;
  id: number;
  offsetX: number;
  name: string;
  clickable: boolean;
  setClickable: (a: boolean) => void;
  setSelectedProject: (a: number) => void;
  setShown: (a: boolean) => void;
  centerPoint: number;
}): JSX.Element {
  const [finalOffset, setFinalOffset] = useState(offsetX);
  const carouselItemRef = useRef();
  const itemXOffset =
    carouselItemRef?.current?.getBoundingClientRect().left +
      carouselItemRef?.current?.getBoundingClientRect().width / 2 ??
    centerPoint;
  useEffect(() => {
    if (carouselItemRef?.current?.getBoundingClientRect().right < 0) {
      setFinalOffset(3000);
    } else {
      setFinalOffset(offsetX * 1.5);
    }
  }, [offsetX]);
  if (id == 1) {
    console.log(carouselItemRef?.current?.getBoundingClientRect().right);
  }
  return (
    <div
      ref={carouselItemRef}
      style={{
        transform: `translateX(${finalOffset}px) translateY(${-(
          Math.abs(centerPoint - itemXOffset) / 55
        )}px) rotate(${-((centerPoint - itemXOffset) / 300)}deg)`,
      }}
      className={styles.carouselItem}
      onClick={(e) => {
        e.stopPropagation();
        if (clickable) {
          setShown(true);
          setSelectedProject(id - 1);
        }
        setClickable(false);
      }}
    >
      {children}
      <div>
        <div className={styles.projectNumber}>PROJECT {id}</div>
        <div className={styles.projectName}>{name}</div>
      </div>
    </div>
  );
}
