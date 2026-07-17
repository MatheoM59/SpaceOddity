export type Launch = {
  name: string;
  net: string;
  window_start: string;
  window_end: string;
  image: string | null;
  webcast_live: boolean;
  probability: number | null; // ⚠️ null ou -1 = inconnu
  status: { name: string; description: string };
  net_precision: { name: string } | null;
  flightclub_url: string;
  mission: {
    name: string;
    type: string; // ex: "Communications", "Human Exploration", "Unknown"
    description: string;
    orbit: { name: string; abbrev: string } | null; // ex: "Low Earth Orbit" / "LEO"
  } | null;
  launch_service_provider: { name: string };
  rocket: {
    configuration: {
      name: string; // ex: "Falcon 9"
      full_name: string; // ex: "Falcon 9 Block 5"
      family: string; // ex: "Falcon"
    };
  };
  pad: {
    name: string;
    description: string | null;
    map_image: string | null;
    wiki_url: string | null;
    map_url: string | null;
    latitude: string;
    longitude: string;
    total_launch_count: number;
  };
  // ⚠️ champs disponibles uniquement avec ?mode=detailed
  // (tableaux souvent vides loin du tir → toujours faire un rendu conditionnel)
  vidURLs: { url: string; source: string; title: string }[]; // ⚠️ camelCase !
  infoURLs: { url: string; title: string }[];
  mission_patches: { name: string; image_url: string }[];
  updates: { comment: string; created_on: string }[];
};

type LaunchResponse = { results: Launch[] };

export async function getLaunches(): Promise<Launch[]> {
  try {
    const res = await fetch(
      "https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=10&mode=detailed",
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return [];
    const data: LaunchResponse = await res.json();
    return data.results;
  } catch {
    return [];
  }
}

export async function getNextLaunch(): Promise<Launch | null> {
  const launches = await getLaunches();
  const done = ["Launch Successful", "Launch Failure", "Partial Failure"];
  return launches.find((l) => !done.includes(l.status.name)) ?? null;
}
