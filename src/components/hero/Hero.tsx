import styles from "./hero.module.css";
import type { Apod } from "@/lib/nasa";
import Image from "next/image";
import { ReadStory } from "./ReadStory";
import { AddFavorite } from "./AddFavorite";

export const Hero = ({ apod }: { apod: Apod }) => {
  return (
    <div className={styles.container}>
      <Image
        src={apod.url}
        alt={apod.title}
        fill
        sizes="100vw"
        className={styles.img}
        priority
      />
      <Image
        src={apod.url}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className={styles.imgBlur}
        priority
      />
      <div className={styles.grade}></div>
      <div className={styles.readout}>
        <div>
          APOD . <b>{apod.date}</b>
        </div>
        <div>
          MEDIA . <b>{apod.media_type.toUpperCase()}</b>
        </div>
        {apod.copyright && <div>© {apod.copyright}</div>}
      </div>
      <div className={styles.content}>
        <div className={styles.contentTop}>
          <p className={styles.astronomy}>Astronomy picture of the day</p>
          <p className={styles.date}>{apod.date}</p>
        </div>
        <h2 className={styles.title}>{apod.title}</h2>
        <p className={styles.text}>{apod.explanation}</p>
        <div className={styles.heroAction}>
          <AddFavorite apod_date={apod.date} />
          <ReadStory title={apod.title} explanation={apod.explanation} />
        </div>
      </div>
    </div>
  );
};
