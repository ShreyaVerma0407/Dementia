import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// Updated import paths
import HelpDesk from "./pages/HelpDesk.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Feedback from "./pages/Feedback.jsx";
import NotFound from "./pages/NotFound";
import Faq from "./pages/Faq";
import Landing from "./pages/Landing.jsx";
import Loader from "./pages/Loader"; // Import your Loader component

import './App.css';

function AppWithLoader() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading process (e.g., data fetching or page loading)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after 3 seconds or when content is ready
    }, 3000); // Adjust this as needed
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <Loader /> // Show the loader while content is loading
      ) : (
        <Routes>
          {/* HelpDesk related Routes */}
          <Route path="/helpdesk" element={<HelpDesk />} />
          <Route path="/helpdesk/contactus" element={<ContactUs />} />
          <Route path="/helpdesk/feedback" element={<Feedback />} />
          <Route path="/helpdesk/faq" element={<Faq />} />
          
          <Route path="/" element={<Landing />} />
          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default AppWithLoader;
