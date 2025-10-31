import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/Navbar.css';

const Navbar = () => {
  const [animationData, setAnimationData] = useState(null);

  // Fetch the Lottie animation JSON file from the public folder (animations/navbar/ folder)
  useEffect(() => {
    fetch('/animations/navbar.json') // Path to your navbar animation file
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
    <div className="navbar">
      <div className="navbar-left">
        {/* Render Lottie animation with reduced size */}
        <Lottie options={defaultOptions} height={60} width={60} /> {/* Reduced size of animation */}
        <span className="navbar-title">MEMORYHARBOR</span>
      </div>
      <div className="navbar-right">
        <ul>
          <li>
            Games
          </li>
          <li>
            Songs
          </li>
          <li>
            <Link to="/helpdesk">Helpdesk</Link> {/* Link to helpdesk page */}
          </li>
          <li>
           Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
