import { Header } from "@/components/header/Header";
import styles from "./page.module.css";
import { getApod } from "@/lib/nasa";
import { Hero } from "@/components/hero/Hero";

export default async function Home() {
  const apod = await getApod();
  return (
    <div className={styles.container}>
      <Header />
      <Hero apod={apod} />
    </div>
  );
}
