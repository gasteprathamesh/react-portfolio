import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      
      <div className={styles.content}>
        <h2 className={styles.title}>Experience</h2>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{historyItem.organisation}</h3>
                  {historyItem.roles.map((role, roleId) => (
                    <div key={roleId} className={styles.role}>
                      <h3>{role.title}</h3>
                      <p>{`${role.startDate} - ${role.endDate}`}</p>
                      <ul>
                        {role.experiences.map((experience, expId) => (
                          <li key={expId}>{experience}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>

        <h2 className={styles.title}>Tech Stack</h2>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
