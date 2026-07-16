import { Planet } from "@/lib/solarSystem";
import styles from "./planet.module.css";
export const PlanetFich = ({ selectedPlanet }: { selectedPlanet: Planet }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.planetOrb}
        style={
          { "--planet-color": selectedPlanet.color } as React.CSSProperties
        }
      />
      <div className={styles.data}>
        <div className={styles.facts}>
          <div className={styles.k}>Diameter</div>
          <div className={styles.v}>
            {selectedPlanet.diameter.toLocaleString()}
            <small> km</small>
          </div>
        </div>

        <div className={styles.facts}>
          <div className={styles.k}>Moons</div>
          <div className={styles.v}>{selectedPlanet.moons}</div>
        </div>

        <div className={styles.facts}>
          <div className={styles.k}>Length of day</div>
          <div className={styles.v}>
            {selectedPlanet.dayHours}

            <small> hours</small>
          </div>
        </div>

        <div className={styles.facts}>
          <div className={styles.k}>Name</div>
          <div className={styles.v}>{selectedPlanet.name}</div>
        </div>
      </div>
    </div>
  );
};
