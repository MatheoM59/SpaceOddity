"use client";
import { planets } from "@/lib/solarSystem";
import { Planet } from "@/lib/solarSystem";
import { PlanetFich } from "./Planet";
import styles from "./planetData.module.css";
import { useState } from "react";

export const PlanetData = () => {
  const [selected, setSelected] = useState<Planet>(planets[2]);

  return (
    <div className={styles.planetContainer}>
      <div className={styles.planetTop}>Planetary data</div>
      <div className={styles.planets}>
        {planets.map((planet) => (
          <button
            key={planet.id}
            className={`${styles.planet} ${selected.id === planet.id ? styles.active : ""}`}
            onClick={() => setSelected(planet)}
          >
            {planet.name}
          </button>
        ))}
      </div>
      <PlanetFich selectedPlanet={selected} />
    </div>
  );
};
