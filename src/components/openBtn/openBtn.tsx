"use client";
import styles from "./openBtn.module.css";
import type { Dispatch, SetStateAction } from "react";

export const OpenBtn = ({
  content,
  setOpen,
}: {
  content: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <button
        className={`${styles.btn} ${styles.btnGhost}`}
        onClick={() => setOpen(true)}
      >
        {content}
      </button>
    </>
  );
};
