import React, { useRef, useState } from "react";
import Modal from "../modal/modal";
import styles from "./carouselItem.module.css";

export default function CarouselItem({
  children,
  id,
  name,
  clickable,
  setClickable,
  setShown,
  setSelectedProject,
  centerPoint,
}: {
  children: React.ReactNode;
  id: number;
  name: string;
  clickable: boolean;
  setClickable: (a: boolean) => void;
  setSelectedProject: (a: number) => void;
  setShown: (a: boolean) => void;
  centerPoint: number;
}): JSX.Element {
  const carouselItemRef = useRef();
  const itemXOffset =
    carouselItemRef?.current?.getBoundingClientRect().left +
      carouselItemRef?.current?.getBoundingClientRect().width / 2 ??
    centerPoint;
  if (id == 2) {
    console.log(centerPoint - itemXOffset);
  }
  return (
    <div
      ref={carouselItemRef}
      style={{
        transform: `translateY(${-(
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
