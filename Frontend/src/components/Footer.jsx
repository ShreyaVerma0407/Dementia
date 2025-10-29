import React from "react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Wave SVG */}
      <div className={styles.wave}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ff6600"
            fillOpacity="1"
            d="M0,96L60,117.3C120,139,240,181,360,176C480,171,600,117,720,117.3C840,117,960,171,1080,181.3C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
          <path
            fill="#ff8533"
            fillOpacity="0.7"
            d="M0,192L80,197.3C160,203,320,213,480,197.3C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Footer content */}
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3>Team Dementia </h3>
        </div>
      </div>
    </footer>
  );
}
