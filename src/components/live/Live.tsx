import { LaunchCard } from "../solarSystem/launch/Launch";
import { getLaunches } from "@/lib/launch";
export const Live = async () => {
  const launches = await getLaunches();

  return (
    <div>
      {launches ? (
        launches.map((launch, index) => (
          <div key={index}>
            <LaunchCard nextLaunch={launch} />
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};
