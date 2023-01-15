import Image from "next/image";
import CarouselItem from "../carouselItem/carouselItem";
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
          />
        </div>
        <div className={styles.subImageWrapper}>
          <Image
            src="/images/EISENMAN2.png"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="project 2 bottom"
          />
        </div>
      </div>
    ),
  },
  {
    id: 1,
    name: "PEOPLE’S PARK COMPLEX",
    imageURI: "/images/3.png",
  },
];

export default function Carousel({}: {}): JSX.Element {
  return (
    <div className={styles.root}>
      <span className={styles.bigFont}>PROJECTS</span>
      <div className={styles.carousel}>
        {projects.map((project) => {
          return (
            <CarouselItem key={project.id} id={project.id} name={project.name}>
              {project.imageURI ? (
                <div className={styles.imageWrapper}>
                  <Image
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
      <div className={`${styles.caret}`}>{">"}</div>
    </div>
  );
}
