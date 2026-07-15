"use client";
import { useState } from "react";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import styles from "./style/auth.module.css";

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toggleMode = () => setIsLogin(!isLogin);
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {isLogin ? (
          <Login
            onToggle={toggleMode}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        ) : (
          <SignUp
            onToggle={toggleMode}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        )}
      </div>
    </div>
  );
};
