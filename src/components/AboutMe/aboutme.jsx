import React from "react";
import styles from "./aboutme.module.css";

export default function AboutMe() {
  return (
    <div className={styles.image}>
      <img src="/img/wave1.svg" alt="" />
      <div className={styles.contenedor}>
        <span>ABOUT ME</span>
        <div>
          <img src="/img/euge.jpg" alt="" />
          <p>
            Mi nombre es Maria Eugenia Soldano, artista. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}