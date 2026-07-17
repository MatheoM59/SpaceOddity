"use client";
import { OpenBtn } from "@/components/openBtn/openBtn";
import Image from "next/image";
import styles from "./launchModal.module.css";
import type { Launch } from "@/lib/launch";
import { useState } from "react";
import { LaunchCounter } from "./LaunchCounter";

export const LaunchModal = ({ launch }: { launch: Launch }) => {
  const [open, setOpen] = useState(true);
  console.log({ flightclub_url: launch.flightclub_url });

  return (
    <>
      <OpenBtn content={"View"} setOpen={setOpen} />
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}>
          <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.x}
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              ✕
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
              <div className={styles.infoRow}>
                <div className={styles.rowContent}>
                  <h1 className={styles.title}>{launch.mission?.name}</h1>
                  <h2 className={styles.chip}>{launch.mission?.type}</h2>
                  <p className={styles.statusName}>{launch.status.name}</p>
                  <p className={styles.statusDesc}>{launch.status.description}</p>
                </div>
              </div>
              <div className={styles.infoRow}>
                <LaunchCounter net={launch.net} />
                <div className={styles.rowContent}>
                  <p className={styles.window}>
                    {launch.window_start} - {launch.window_end}
                  </p>
                  {launch.probability !== null && launch.probability >= 0 && (
                    <p className={styles.probability}>{launch.probability}%</p>
                  )}
                </div>
              </div>
              <div className={styles.infoRow}>
                <div className={styles.rowContent}>
                  <div className={styles.description}>
                    {launch?.mission?.description}
                  </div>
                  <p className={styles.value}>{launch.mission?.orbit?.name}</p>
                </div>
                <div className={styles.rowContent}>
                  <p className={styles.value}>
                    {launch.launch_service_provider.name}
                  </p>
                </div>
              </div>
              <div className={styles.infoRow}>
                <p className={styles.value}>{launch.pad.name}</p>
                {launch.pad.map_image && (
                  <Image
                    src={launch.pad.map_image}
                    width={500}
                    height={200}
                    alt={launch.pad.name}
                    className={styles.mapImage}
                  />
                )}
                <p className={styles.coords}>
                  Y :{launch.pad.latitude} - X :{launch.pad.longitude}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
