"use client";
import { useRouter } from "next/navigation";
import type { Dispatch, SetStateAction } from "react";
import styles from "./style/signUp.module.css";

type SignUpProps = {
  onToggle: () => void;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
};
export const SignUp = ({
  onToggle,
  email,
  setEmail,
  password,
  setPassword,
}: SignUpProps) => {
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        router.push("/home");
        router.refresh();
      } else {
        console.error("Erreur" + data.message);
      }
    } catch (error) {
      console.error("Networ Error" + error);
    }
  };
  return (
    <div className={styles.form}>
      <h2 className={styles.title}>Sign Up</h2>
      <div className={styles.field}>
        <label className={styles.label}>Email</label>
        <input
          className={styles.input}
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Pass Word</label>
        <input
          className={styles.input}
          type="password"
          placeholder="🔒 Pass Word"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className={styles.submit} onClick={handleSubmit}>
        Sign Up
      </button>
      <button className={styles.toggle} onClick={onToggle}>
        Already have an account? Login
      </button>
    </div>
  );
};
