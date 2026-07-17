export async function getApod(): Promise<Apod | null> {
  try {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`,
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
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
