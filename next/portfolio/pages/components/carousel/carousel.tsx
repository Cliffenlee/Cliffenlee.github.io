import Image from "next/image";
import { useState } from "react";
import CarouselItem from "../carouselItem/carouselItem";
import Modal from "../modal/modal";
import styles from "./carousel.module.css";

type Project = {
  id: number;
  name: string;
  imageURI?: string;
  customChild?: React.ReactNode;
};

const projects: ReadonlyArray<Project> = [
  {
    id: 1,
    name: "KANDARIYA MAHADEV TEMPLE",
    imageURI: "/images/1.png",
  },
  {
    id: 2,
    name: "EISENMAN’S HOUSE “HOUSE II”",
    customChild: (
      <div className={styles.bigImageWrapper}>
        <div className={styles.subImageWrapper}>
          <Image
            src="/images/EISENMAN1.png"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="project 2 top"
            draggable={false}
          />
        </div>
        <div className={styles.subImageWrapper}>
          <Image
            src="/images/EISENMAN2.png"
            width="0"
            height="0"
            sizes="100vw"
            draggable={false}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="project 2 bottom"
          />
        </div>
      </div>
    ),
  },
  {
    id: 3,
    name: "PEOPLE’S PARK COMPLEX",
    imageURI: "/images/3.png",
  },
];

export default function Carousel({}: {}): JSX.Element {
  const [dragging, setDragging] = useState(false);
  const [clickable, setClickable] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [oldOffsetX, setOldOffsetX] = useState(0);
  const [selectedProject, setSelectedProject] = useState(0);
  const [shown, setShown] = useState(false);

  const centerPoint = typeof window !== "undefined" ? window.innerWidth / 2 : 0;

  return (
    <div className={styles.root}>
      <Modal
        title={projects[selectedProject].name}
        shown={shown}
        setShown={setShown}
      />
      <span className={styles.bigFont}>PROJECTS</span>
      <div
        className={styles.carousel}
        style={{ transform: `translateX(${offsetX * 1.5}px)` }}
        onClick={(e) => {
          e.preventDefault();
        }}
        onMouseDown={(e) => {
          setStartX(e.pageX);
          setStartY(e.pageY);
          setDragging(true);
        }}
        onMouseMove={(e) => {
          if (dragging) {
            setOffsetX(e.pageX - startX + oldOffsetX);
          }
        }}
        onMouseUp={(e) => {
          const diffX = Math.abs(e.pageX - startX);
          const diffY = Math.abs(e.pageY - startY);
          console.log(diffX, diffY);
          if (diffX < 6 && diffY < 6) {
            setClickable(true);
          }
          setOldOffsetX(offsetX);
          setDragging(false);
        }}
        onDragStart={(e) => {
          e.preventDefault();
        }}
      >
        {projects.map((project) => {
          return (
            <CarouselItem
              centerPoint={centerPoint}
              clickable={clickable}
              setClickable={setClickable}
              setSelectedProject={setSelectedProject}
              setShown={setShown}
              key={project.id}
              id={project.id}
              name={project.name}
            >
              {project.imageURI ? (
                <div className={styles.imageWrapper}>
                  <Image
                    draggable={false}
                    src={project.imageURI}
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    alt={`project ${project.id}`}
                  />
                </div>
              ) : project.customChild ? (
                project.customChild
              ) : (
                <></>
              )}
            </CarouselItem>
          );
        })}
      </div>
      {/* <div className={`${styles.caret}`}>{">"}</div> */}
    </div>
  );
}
