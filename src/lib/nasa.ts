export async function getApod() {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`,
    { next: { revalidate: 3600 } },
  );
  if (!res.ok) throw new Error("NASA APOD fetch failed");
  return res.json();
}
