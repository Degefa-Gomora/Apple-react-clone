import React from "react";
import styles from "./SectionThree.module.css"; // CSS Module import

const ThirdSection = () => {
  return (
    <section className={styles["third-hightlight-wrapper"]}>
      <div className="container">
        <div className={`${styles["title-wraper"]} ${styles.bold}`}>
          iPhone 11 Pro
        </div>

        <div className={styles["description-wrapper"]}>
          Pro cameras. Pro display. Pro performance.
        </div>

        <div className={styles["price-wrapper"]}>
          From $24.95/mo. or $599 with trade‑in.
        </div>

        <div className={styles["links-wrapper"]}>
          <ul>
            <li>
              <a href="#">Learn more</a>
            </li>
            <li>
              <a href="#">Buy</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
