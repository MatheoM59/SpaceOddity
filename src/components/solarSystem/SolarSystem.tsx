import { PlanetData } from "./planetData/PlanetData";
import styles from "./solarSystem.module.css";
import { SectionHead } from "../sectionHead/SectionHead";
import { LaunchCard } from "./launch/Launch";
import { getNextLaunch } from "@/lib/launch";

export const SolarSystem = async () => {
  const title = "Explore the Solar System";
  const text = "All launchs →";
  const nextLaunch = await getNextLaunch();
  return (
    <div className={styles.container}>
      <SectionHead title={title} text={text} />
      <div className={styles.sections}>
        <PlanetData />
        {nextLaunch ? <LaunchCard nextLaunch={nextLaunch} /> : <div></div>}
      </div>
    </div>
  );
};
