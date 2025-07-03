import React from "react";
import arcadeLogo from "../../assets/images/icons/arcade.png"; // Adjust the image path as needed
import styles from "./SectionSix.module.css"; // CSS Module import

const SixthSection = () => {
  return (
    <section className={styles["sixth-heghlight-wrapper"]}>
      <div className="container-fluid">
        <div className="row">
          {/* Left Side Section */}
          <div className={`col-sm-12 col-md-6 ${styles["left-side-wrapper"]}`}>
            <div className={styles["left-side-container"]}>
              <div className={styles["top-logo-wrapper"]}>
                <div className={styles["logo-wrapper"]}>
                  <img src={arcadeLogo} alt="Apple Arcade" />
                </div>
              </div>
              <div
                className={`${styles["description-wraper"]} ${styles.white}`}
              >
                Agent 8 is a small hero on a big mission.
              </div>
              <div className={styles["links-wrapper"]}>
                <ul>
                  <li>
                    <a href="#">
                      Play now<sup>2</sup>
                    </a>
                  </li>
                  <li>
                    <a href="#">Learn about Apple Arcade</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side Section */}
          <div className={`col-sm-12 col-md-6 ${styles["right-side-wrapper"]}`}>
            <div className={styles["right-side-container"]}>
              <div className={styles["title-wraper"]}>
                Apple Card Monthly Installments
              </div>
              <div className={styles["description-wraper"]}>
                Pay for your next iPhone over time, interest-free with Apple
                Card.
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
        </div>
      </div>
    </section>
  );
};

export default SixthSection;
