import React from "react";

import styles from "./Intro.module.css";
import { getImageUrl } from "../../utils";

export const Intro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Prathamesh</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 2.5+ years of experience using React and
          NodeJS.
        </p>
        {/* <a href="mailto:gasteprathamesh@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a> */}
      </div>
      <img
        src={getImageUrl("intro/introImage.png")}
        alt="Profile Image"
        className={styles.introImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
