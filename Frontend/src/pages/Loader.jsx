import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import '../styles/Loader.css'; // Link to your loader CSS file

const Loader = () => {
  const [animationData, setAnimationData] = useState(null);

  // Fetch the Lottie animation JSON file from the public folder (animations/navbar folder)
  useEffect(() => {
    fetch('/animations/navbar.json') // Path to your navbar animation file
      .then((response) => response.json())
      .then((data) => {
        setAnimationData(data);
      })
      .catch((error) => console.error('Error loading the animation:', error));
  }, []);

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
    <div className="loader-container">
      <div className="loader-background">
        {/* Render Lottie animation with increased size */}
        <Lottie options={defaultOptions} height={250} width={250} /> {/* Increased size of animation */}
        <div className="loader-text"> MemoryHarbor Loading...</div> {/* Add "Loading..." text */}
      </div>
    </div>
  );
};

export default Loader;
