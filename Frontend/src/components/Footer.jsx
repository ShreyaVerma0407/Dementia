import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/footer.module.css';

const Footer = () => {
  const [animationData, setAnimationData] = useState(null);

  // Fetch the Lottie animation JSON file for the footer
  useEffect(() => {
    fetch('/animations/navbar.json') // Assuming navbar.json is available in the public folder
      .then((response) => response.json())
      .then((data) => {
        setAnimationData(data);
      })
      .catch((error) => console.error('Error loading the animation:', error));
  }, []);

  // Default Lottie options for footer animation
  const defaultOptions = {
    loop: true,
    autoplay: true, // Controls autoplay
    animationData: animationData, // Uses the fetched animation data
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  if (!animationData) {
    return <div>Loading...</div>; // Loading state while the animation JSON is being fetched
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Column: Lottie Animation and Quote */}
        <div className={styles.leftColumn}>
          <Lottie options={defaultOptions} height={120} width={120} />
          <p className={styles.quote}>“Caring for Memories, One Step at a Time”</p>

          {/* Follow Us On Section */}
          <div className={styles.socialSection}>
            <p>Follow Us On</p>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
            </div>
          </div>
        </div>

        {/* Middle Column: Quick Links */}
        <div className={styles.middleColumn}>
          <h4 className={styles.columnTitle}>Quick Links</h4>
          <ul className={styles.linksList}>
            <li><a href="/" className={styles.link}>Home</a></li>
            <li><a href="/helpdesk" className={styles.link}>HelpDesk</a></li>
            <li><a href="/Games" className={styles.link}>Games</a></li>
            <li><a href="/Calender" className={styles.link}>Calender</a></li>
            <li><a href="/mood" className={styles.link}>Mood</a></li>
          </ul>
        </div>

        {/* Right Column: Services */}
        <div className={styles.rightColumn}>
          <h4 className={styles.columnTitle}>Services</h4>
          <ul className={styles.linksList}>
            <li><a href="/pantry" className={styles.link}>Moodtracker</a></li>
            <li><a href="/nutrilog" className={styles.link}>Remedy</a></li>
            <li><a href="/calorifi" className={styles.link}>CaregiverConnect</a></li>
            <li><a href="/emergency" className={styles.link}>Emergency</a></li>
            <li><a href="/logout" className={styles.link}>Logout</a></li>
          </ul>
        </div>
      </div>

      <hr />

      {/* Copyright Section */}
      <div className={styles.footerBottom}>
        <p>© 2025 MEMORYHARBOR. All Rights Reserved.</p>
      </div>

    
    </footer>
  );
};

export default Footer;
