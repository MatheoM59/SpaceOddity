import { CardHead } from "@/components/cardHead/CardHead";
import styles from "./launch.module.css";
import { LaunchModal } from "./LaunchModal";
import { LaunchCounter } from "./LaunchCounter";
import type { Launch } from "@/lib/launch";

export const LaunchCard = ({ nextLaunch }: { nextLaunch: Launch }) => {
  const content = "Next launch";
  if (!nextLaunch) {
    return (
      <div className={styles.container}>
        <CardHead content="Next launch" />
        <div className={styles.noLaunch}>⚠️ No upcoming launch</div>
      </div>
    );
  }
  const net = nextLaunch.net;
  return (
    <div className={styles.container}>
      <CardHead
        content={content}
        action={<LaunchModal launch={nextLaunch} />}
      />
      <div className={styles.content}>
        <div className={styles.counter}>
          <LaunchCounter net={net} />
        </div>
        <div className={styles.countLabel}>days . hrs . min . sec</div>
        <div className={styles.mission}>
          <b>{nextLaunch.mission?.name ?? nextLaunch.name}</b>
          {nextLaunch.mission && <span> - {nextLaunch.mission.type}</span>}
        </div>
        <div className={styles.missionRow}>
          <p>Provider</p>
          <p>{nextLaunch.launch_service_provider.name}</p>
        </div>
        <div className={styles.missionRow}>
          <p>Pad</p>
          <p>{nextLaunch.pad.name}</p>
        </div>
      </div>
    </div>
  );
};
