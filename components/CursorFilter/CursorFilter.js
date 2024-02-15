import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const CursorFilter = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [width, setWidth] = useState(10000);

  const handleFollow = (e) => {
    setPosition({
      x: Math.round(e.clientX),
      y: Math.round(e.clientY),
    });
  };

  useEffect(() => {
    if (!window) return;
    setWidth(window.innerWidth);

    document.addEventListener("pointermove", handleFollow);
    () => document.removeEventListener("pointermove", handleFollow);
  }, []);

  return (
    <div
      className={styles.cursor}
      style={{
        left: position.x,
        top: position.y,
        boxShadow: `0 0 0 ${width * 2}px #000`,
        display: width < 600 ? 'none' : 'block',
      }}
    />
  );
};

export default CursorFilter;
