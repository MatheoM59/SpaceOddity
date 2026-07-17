"use client";
import { useEffect, useState } from "react";
import styles from "./launchCounter.module.css";
export const LaunchCounter = ({ net }: { net: string }) => {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setLeft(new Date(net).getTime() - Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [net]);

  if (left === null) {
    return (
      <div className={styles.container}>
        --
        <span>:</span>
        --
        <span>:</span>
        --
      </div>
    );
  }
  const s = Math.max(0, Math.floor(left / 1000));
  const days = Math.floor(s / 86400);
  const hrs = Math.floor((s % 86400) / 3600);
  const min = Math.floor((s % 3600) / 60);
  const sec = s % 60;

  if (left <= 0) {
    return <div className={styles.container}>LIFTOFF 🚀</div>;
  }
  return (
    <div className={styles.container}>
      {String(days).padStart(2, "0")}
      <span>:</span>
      {String(hrs).padStart(2, "0")}
      <span>:</span>
      {String(min).padStart(2, "0")}
      <span>:</span>
      {String(sec).padStart(2, "0")}
    </div>
  );
};
