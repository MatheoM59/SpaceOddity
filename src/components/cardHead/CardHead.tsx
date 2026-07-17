import type { ReactNode } from "react";
import styles from "./cardHead.module.css";
export const CardHead = ({
  content,
  action,
}: {
  content: string;
  action?: ReactNode;
}) => (
  <div className={styles.container}>
    {content}
    {action}
  </div>
);
