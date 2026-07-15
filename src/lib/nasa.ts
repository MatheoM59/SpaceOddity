export async function getApod(): Promise<Apod> {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`,
    { next: { revalidate: 86400 } },
  );
  if (!res.ok) throw new Error("NASA APOD fetch failed");
  return res.json();
}
export type Apod = {
  title: string;
  explanation: string;
  date: string;
  url: string;
  media_type: "image" | "video";
  hdurl?: string;
  copyright?: string;
};
