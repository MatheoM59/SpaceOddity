import { PlanetData } from "./planetData/PlanetData";
import styles from "./solarSystem.module.css";
import { SectionHead } from "../sectionHead/SectionHead";
import { Launch } from "./launch/Launch";

export const SolarSystem = () => {
  const title = "Explore the Solar System";
  const text = "All launchs →";
  return (
    <div className={styles.container}>
      <SectionHead title={title} text={text} />
      <div className={styles.sections}>
        <PlanetData />
        <Launch />
      </div>
    </div>
  );
};
