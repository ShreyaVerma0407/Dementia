import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Updated import paths
import HelpDesk from "./pages/HelpDesk.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Feedback from "./pages/Feedback.jsx";
import NotFound from "./pages/NotFound";
import Faq from "./pages/Faq";
import Landing from "./pages/Landing.jsx";
import './App.css';
function AppWithLoader() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default AppWithLoader;
