"use client";
import { useRouter } from "next/navigation";
import type { Dispatch, SetStateAction } from "react";
import styles from "./style/login.module.css";

type LoginProps = {
  onToggle: () => void;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
};

export const Login = ({
  onToggle,
  email,
  setEmail,
  password,
  setPassword,
}: LoginProps) => {
  const router = useRouter();
  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("done");
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
      <h2 className={styles.title}>Login</h2>
      <div className={styles.field}>
        <label className={styles.label}>Email</label>
        <input
          className={styles.input}
          type="email"
          placeholder="your@email.com"
          value={email.trim().toLowerCase()}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Pass Word</label>
        <input
          className={styles.input}
          type="password"
          placeholder="🔒 Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className={styles.submit} onClick={handleSubmit}>
        Login
      </button>
      <button className={styles.toggle} onClick={onToggle}>
        Don&apos;t have an account? Sign up
      </button>
    </div>
  );
};
