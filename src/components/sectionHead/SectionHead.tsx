import styles from "./sectionHead.module.css";
import Link from "next/link";
export const SectionHead = ({
  title,
  text,
}: {
  title: string;
  text: string;
}) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <Link href={"/"} className={styles.link}>
        {text}
      </Link>
    </div>
  );
};
