import { PlanetData } from "./planetData/PlanetData";
import styles from "./solarSystem.module.css";
export const SolarSystem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Explore the Solar System</h2>
      </div>
      <div className={styles.sections}>
        <PlanetData />
      </div>
    </div>
  );
};
