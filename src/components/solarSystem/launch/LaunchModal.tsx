"use client";
import { OpenBtn } from "@/components/openBtn/openBtn";
import Image from "next/image";
import styles from "./launchModal.module.css";
import type { Launch } from "@/lib/launch";
import { useState } from "react";

export const LaunchModal = ({ launch }: { launch: Launch }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <OpenBtn content={"View"} setOpen={setOpen} />
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}>
          <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
            <button
              className={`${styles.btn} ${styles.x}`}
              onClick={() => setOpen(false)}
            >
              x
            </button>
            {launch.image && (
              <div className={styles.imageContainer}>
                <Image
                  src={launch.image}
                  alt={launch.rocket.configuration.full_name}
                  fill
                  className={styles.img}
                />
              </div>
            )}
            <div className={styles.info}>
              <h1>{launch.mission?.name}</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
