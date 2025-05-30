"use client";
import { use, useState } from "react";
import styles from "./page.module.css";
import { stringify } from "querystring";

export default function Home() {
  
  const [texto, setTexto] = useState("");

  function changeP(event: React.ChangeEvent<HTMLInputElement>){
      setTexto(event.target.value);
  };

  return (
    <div className={styles.div}>
      <h1>Input:</h1>
      <input onChange={changeP} className={styles.input}></input>
      <h2>Paragrafo:</h2>
      <p className={styles.p}>{texto}</p>
    </div>

  );
}
