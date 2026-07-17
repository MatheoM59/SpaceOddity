"use client";
import { useState } from "react";
import styles from "./readStory.module.css";
import { OpenBtn } from "../openBtn/openBtn";

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
      <OpenBtn content={"Read the full story"} setOpen={setOpen} />

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
