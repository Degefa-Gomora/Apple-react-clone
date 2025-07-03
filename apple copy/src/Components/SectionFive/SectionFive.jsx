import React from "react";
import styles from "./SectionFive.module.css"; // CSS Module import
import applelogos from "../../assets/images/icons/apple-tv-logo.png";
import tvshow from "../../assets/images/home/banker.png";
import watchmore from "../../assets/images/icons/watch-series5-logo.png";

const FifthSection = () => {
  return (
    <section className={styles["fifth-heghlight-wrapper"]}>
      <div className="container-fluid">
        <div className="row">
          {/* Left Side Section */}
          <div className={`${styles["left-side-wrapper"]} col-sm-12 col-md-6`}>
            <div className={styles["left-side-container"]}>
              <div className={styles["top-logo-wrapper"]}>
                <div className={styles["logo-wrapper"]}>
                  <img src={applelogos} alt="Apple TV" />
                </div>
              </div>

              <div className={styles["tvshow-logo-wraper"]}>
                <img src={tvshow} alt="Banker TV Show" />
              </div>

              <div className={styles["watch-more-wrapper"]}>
                <a href="#">Watch now on the Apple TV App</a>
              </div>
            </div>
          </div>

          {/* Right Side Section */}
          <div className={`${styles["right-side-wrapper"]} col-sm-12 col-md-6`}>
            <div className={styles["right-side-container"]}>
              <div className={styles["top-logo-wrapper"]}>
                <div className={styles["logo-wrapper"]}>
                  <img src={watchmore} alt="Apple Watch Series 5" />
                </div>
              </div>

              <div className={styles["description-wraper"]}>
                With the Always-On Retina display.
                <br />
                You’ve never seen a watch like this.
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
