import Menu from "./components/menu/menu";
import styles from "./app.module.css";
import Content from "./components/content/content";
import { useEffect, useState } from "react";

export default function App(): JSX.Element {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      console.log("shrinking");
      setMounted(true);
    }, 3000);
  }, []);
  return (
    <div className={styles.root}>
      <div className={styles.menu}>
        <Menu mounted={mounted} />
      </div>
      <div className={styles.content}>
        <Content mounted={mounted} />
      </div>
    </div>
  );
}
