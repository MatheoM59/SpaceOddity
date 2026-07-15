"use client";
import styles from "./addFavorite.module.css";

export const AddFavorite = ({ apod_date }: { apod_date: string }) => {
  const handleClick = async () => {
    const response = await fetch("/api/favApod/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ apod_date: apod_date }),
    });
    const data = await response.json();
    if (response.ok) {
      console.log(data.message);
    } else {
      console.error(data.message);
    }
  };
  return (
    <>
      <button
        onClick={handleClick}
        className={`${styles.btn} ${styles.btnPrimary}`}
      >
        * Save to favorites
      </button>
    </>
  );
};
