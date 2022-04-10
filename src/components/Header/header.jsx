import React from "react";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div>
        <header className={styles.box}>
          <div className={styles.containerTitle}>MARIA EUGENIA SOLDANO</div>
          <div className={styles.containerItems}>
            <span>MIS TRABAJOS</span>
            <span>ABOUT ME</span>
            <span>EXPO Y NOVEDADES</span>
            <span>CONTACT ME</span>
          </div>
        </header>
        <div className={styles.intro}>
          <img
            className={styles.swinging}
            src="/img/SwingingDoodle.png"
            alt=""
          />
          <span>BIENVENIDOS!!</span>
        </div>
      </div>
      <img className={styles.wave} src="/img/wave.svg" alt="" />
    </div>
  );
}
