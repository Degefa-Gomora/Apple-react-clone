import React from "react";
import styles from "./SectionTwo.module.css"; // Import CSS Module

const SecondSection = () => {
  return (
    <section className={styles["second-hightlight-wrapper"]}>
      <div className="container">
        <div className={styles["new-alert"]}>New</div>

        <div
          className={`${styles["title-wraper"]} ${styles.bold} ${styles.black}`}
        >
          MacBook Air
        </div>

        <div className={`${styles["description-wrapper"]} ${styles.black}`}>
          Twice the speed. Twice the storage.
        </div>

        <div className={`${styles["price-wrapper"]} ${styles.grey}`}>
          From $999.
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

export default SecondSection;
