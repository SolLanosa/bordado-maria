import React from "react";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.title}>Conocé más sobre mi trabajo...</div>
      <div className={styles.containerHome}>
        <div className={styles.imageContainer}>
          <div>
            <img src="/img/intergalactico.jpg" alt="" />
            <span>Ganado Intergalactico </span>
          </div>
          <div>
            <img src="/img/peces.jpg" alt="" />
            <span>Mundo submarino</span>
          </div>
          <div>
            <img src="/img/comida.jpg" alt="" />
            <span>Sopa de peces</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div>
            <img src="/img/colores.jpg" alt="" />
            <span>Colores magicos</span>
          </div>
          <div>
            <img src="/img/nadadoras.jpg" alt="" />
            <span>Nadadoras en reposo</span>
          </div>
          <div>
            <img src="/img/portrait.jpg" alt="" />
            <span>Portrait de dame</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div>
            <img src="/img/verano.jpg" alt="" />
            <span>Verano del 86</span>
          </div>
          <div>
            <img src="/img/peces.jpg" alt="" />
            <span>Mundo marino</span>
          </div>
          <div>
            <img src="/img/comida.jpg" alt="" />
            <span>Sopa de peces</span>
          </div>
        </div>
      </div>
    </div>
  );
}
