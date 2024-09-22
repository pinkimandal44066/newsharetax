
import Homepage from "./Components/Homefolder/Homepage";
import Aboutus from "./Components/navpagesfolder/Aboutus";
import Contactus from "./Components/navpagesfolder/Contactus";
import Enquiry from "./Components/navpagesfolder/Enquiry";
import LayOut from "./Components/navpagesfolder/LayOut";
import Services from "./Components/navpagesfolder/Services";
import Accounting from "./Components/Accounting";
import Taxplanning from './Components/Taxplanning';
import Auditing from './Components/Auditing';
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FAQ from "./Components/Faq";
import { Toaster } from "react-hot-toast";
import Blog from "./Components/Blog";

const App = () => {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/about-us" element={<Aboutus />} />
            <Route path="/service" element={<Services />} />
            <Route path="/enquiry" element={<Enquiry />} />
            {/* <Route path="/enquiry" element={<Enquiry />} /> */}
            <Route path="/contact-us" element={<Contactus />} />
            <Route path="/accounting" element={<Accounting />} />
            <Route path="/Taxplanning" element={<Taxplanning />} />
            <Route path="/Auditing" element={<Auditing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            {/* <AnimatePresence /> */}
          </Route>
        </Routes>
        <Toaster />
      </Router>
    </>
  );
};

export default App;


