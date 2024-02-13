import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const CursorFilter = () => {
  const [cor, setCor] = useState({ x: 0, y: 0 });
  const [width, setWidth] = useState(10000);

  useEffect(() => {
    if (!window) return;
    setWidth(window.innerWidth * 2);
    document.addEventListener("pointermove", (e) => {
      setCor({
        x: Math.round(e.clientX),
        y: Math.round(e.clientY),
      });
    });
  }, []);

  return (
    <div
      className={styles.cursor}
      style={{ left: cor.x, top: cor.y, boxShadow: `0 0 0 ${width}px #000` }}
    />
  );
};

export default CursorFilter;
