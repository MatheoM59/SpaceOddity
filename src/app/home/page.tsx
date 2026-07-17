import { Header } from "@/components/header/Header";
import styles from "./page.module.css";
import { getApod } from "@/lib/nasa";
import { Hero } from "@/components/hero/Hero";
import { SolarSystem } from "@/components/solarSystem/SolarSystem";

export default async function Home() {
  const apod = await getApod();
  return (
    <div className={styles.container}>
      <Header />
      {apod ? (
        <Hero apod={apod} />
      ) : (
        <div>⚠️ Sorry the picture of the day is temporally unavailable</div>
      )}
      <SolarSystem />
    </div>
  );
}
