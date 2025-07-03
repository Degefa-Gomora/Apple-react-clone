import React from "react";
import styles from "./Alert.module.css";

function Alert() {
  return (
    <section className={`${styles.alertSection} ${styles.top50}`}>
      <div className={styles.container}>
        <div className={styles.alertTitle}>We’re open for you.</div>
        <div className={styles.alertText}>
          Our retail stores are closed, but you can buy our products here online
          and get fast, free delivery. If you need help finding the right
          product or have a question on your order, chat online with a
          Specialist or call 1-800-MY-APPLE.
          <br />
          For service and support, visit{" "}
          <a href="https://support.apple.com/">support.apple.com</a>.
        </div>
      </div>
    </section>
  );
}

export default Alert;
