import { useEffect, useState } from "react";
import styles from "./app.module.css";
import Main from "./components/main/main";
import Cover from "./components/cover/cover";

export default function App(): JSX.Element {
  const [coverScrolled, setCoverScrolled] = useState(false);
  const scrolledProps = {
    coverScrolled,
    setCoverScrolled,
  };
  useEffect(() => {
    console.log(coverScrolled);
  }, [coverScrolled]);
  return (
    <div className={styles.root}>
      <Cover {...scrolledProps} />
      <Main coverScrolled={coverScrolled} />
    </div>
  );
}
