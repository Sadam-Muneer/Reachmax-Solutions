import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/HomePage/Home";
import AboutUs from "../src/pages/AboutPage/Aboutus";
import Solutions from "../src/pages/SolutionsPage/Solutions";
import Publishing from "../src/pages/PublishingPage/Publishing";
import WhyGames from "../src/pages/WhyGamesPage/WhyGames";
import Careers from "../src/pages/CareerPage/Careers";
import Contact from "../src/pages/ContactPage/Contact";
import ErrorPage from "../src/pages/ErrorPage/Errorpage";
import JobDetails from "../src/pages/Application-form/JobDetails";
import TermsAndConditions from "../src/pages/TermsAndConditions/TermandConditions";
import PrivacyPolicy from "../src/pages/privacyPolicy/PrivacyPolicy";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/publishing" element={<Publishing />} />
          <Route path="/whygames" element={<WhyGames />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobdetails" element={<JobDetails />} />
          <Route path="/termsAndConditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
