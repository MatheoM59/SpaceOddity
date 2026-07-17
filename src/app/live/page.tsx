import styles from "./page.module.css";
import { Header } from "@/components/header/Header";
import { Live } from "@/components/live/Live";
export default async function LivePage() {
  return (
    <div className={styles.container}>
      <Header />
      <Live />
    </div>
  );
}
