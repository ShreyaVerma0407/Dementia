import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import '../styles/Landing.css';
import Navbar from '../components/Navbar';
const LandingPage = () => {
  const [animationData, setAnimationData] = useState(null);

  // Fetch the Lottie animation JSON file from the public folder
  useEffect(() => {
    fetch('/animations/landing.json')
      .then((response) => response.json())
      .then((data) => {
        setAnimationData(data);
      })
      .catch((error) => console.error('Error loading the animation:', error));
  }, []);

  // Default Lottie options
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
    <div className="landing-container">
        <Navbar />
      <div className="left-side">
        <div className="content">
          <h1 className="title">Welcome to</h1>
          <h2 className="memory-harbor">MEMORYHARBOR</h2>
          <p className="description">
            Your one-stop solution for maintaining routine and improving cognitive health in the face of dementia.
            It provides tools like journaling, face tracking, and engaging activities to foster a stable and supportive daily life.
          </p>
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>
      <div className="right-side">
        {/* Render Lottie animation with increased size */}
        <Lottie options={defaultOptions} height={600} width={600} />
      </div>
    </div>
  );
};

export default LandingPage;
