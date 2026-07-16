import styles from "./style/header.module.css";
import Link from "next/link";
export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Link href="/home" className={styles.logo}>
          <span className={styles.mark}></span>
          <span className={styles.name}>Space Oddity</span>
        </Link>
      </div>
      <div>
        <h2 className={styles.name}>Development in progress</h2>
      </div>
      <div className={styles.links}>
        <Link href="/home" className={styles.link}>
          Home
        </Link>
        <Link href="/home" className={styles.link}>
          Explore
        </Link>
        <Link href="/home" className={styles.link}>
          Live
        </Link>
        <Link href="/home" className={styles.link}>
          Gallery
        </Link>
        <Link href="/home" className={styles.account}>
          Account
        </Link>
      </div>
    </div>
  );
};
