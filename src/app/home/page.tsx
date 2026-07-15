import { Header } from "@/components/header/Header";
import styles from "./page.module.css";
import { getApod } from "@/lib/nasa";
import Image from "next/image";

export default async function Home() {
  const apod = await getApod();
  console.log(apod);
  return (
    <div className={styles.container}>
      <Header />
      <div>
        <h1>{apod.title}</h1>
        <Image src={apod.url} alt={apod.title} width={500} height={500} />
        <p>{apod.explanation}</p>
      </div>
    </div>
  );
}
