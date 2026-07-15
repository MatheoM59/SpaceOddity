"use client";
import { useState } from "react";
import styles from "./readStory.module.css";

export const ReadStory = ({
  title,
  explanation,
}: {
  title: string;
  explanation: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={`${styles.btn} ${styles.btnGhost}`}
        onClick={() => setOpen(true)}
      >
        Read the full story
      </button>

      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}>
          <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
            <button
              className={`${styles.btn} ${styles.x}`}
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
            <h2>{title}</h2>
            <p>{explanation}</p>
          </div>
        </div>
      )}
    </>
  );
};
