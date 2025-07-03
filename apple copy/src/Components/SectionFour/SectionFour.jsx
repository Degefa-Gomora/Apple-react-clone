import React from "react";
import styles from "./SectionFour.module.css"; // CSS Module import

const FourthSection = () => {
  return (
    <section className={styles["fourth-heghlight-wrapper"]}>
      <div className="container-fluid">
        <div className="row">
          {/* Left Side Section */}
          <div className={`col-sm-12 col-md-6 ${styles["left-side-wrapper"]}`}>
            <div className={styles["left-side-container"]}>
              <div className={styles["title-wraper"]}>iPhone 11</div>
              <div className={styles["description-wraper"]}>
                Just the right amount of everything.
              </div>
              <div className={styles["price-wrapper"]}>
                From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
              </div>

              <div className={styles["links-wrapper"]}>
                <ul>
                  <li>
                    <a href="#">Learn more</a>
                  </li>
                  <li>
                    <a href="#">Apply now</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side Section */}
          <div className={`col-sm-12 col-md-6 ${styles["right-side-wrapper"]}`}>
            <div className={styles["right-side-container"]}>
              <div className={`${styles["title-wraper"]} ${styles.white}`}>
                Get the latest CDC response to COVID-19.
              </div>

              <div className={`${styles["links-wrapper"]} ${styles.white}`}>
                <ul>
                  <li>
                    <a href="#">Watch the PSA</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
