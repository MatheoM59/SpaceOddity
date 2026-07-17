"use client";
import { planets } from "@/lib/solarSystem";
import { Planet } from "@/lib/solarSystem";
import { PlanetFich } from "./Planet";
import styles from "./planetData.module.css";
import { useState } from "react";
import { CardHead } from "@/components/cardHead/CardHead";

export const PlanetData = () => {
  const [selected, setSelected] = useState<Planet>(planets[2]);
  const content = "Planetary data";

  return (
    <div className={styles.planetContainer}>
      <CardHead content={content} />
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
