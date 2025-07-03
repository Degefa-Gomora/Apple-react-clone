import React from "react";
import styles from "./SectionOne.module.css"; // CSS Module import

const FirstSection = () => {
  return (
    <section className={styles["first-hightlight-wrapper"]}>
      <div className="container">
        <div className={styles["new-alert"]}>New</div>

        <div
          className={`${styles["title-wraper"]} ${styles.bold} ${styles.black}`}
        >
          iPad Pro
        </div>

        <div className={styles["links-wrapper"]}>
          <ul>
            <li>
              <a href="#">Learn more</a>
            </li>
            <li>
              <a href="#">Order</a>
            </li>
          </ul>
        </div>

        <div className={styles["ipod-caption"]}>
          <div className={`col-sm-12 col-md-6 ${styles["text-md-right"]}`}>
            iPad Pro available starting 3.25
          </div>
          <div className={`col-sm-12 col-md-6 ${styles["text-md-left"]}`}>
            Magic Keyboard coming in May
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
