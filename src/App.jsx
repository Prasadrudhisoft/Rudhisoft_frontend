import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./Components/ScrollToTop";
import Header from "./Components/header";
import Footer from "./Components/footer";
import AboutUs from "./pages/about";
import Home from "./pages/home";
import Services from "./pages/services";
import Technology from "./pages/technology";
import Careers from "./pages/careers";
import Contact from "./pages/contact";
import ProductsListing from "./pages/products/ProductsListing";
import IndustriesListing from "./pages/industries/IndustriesListing";
import Leadership from "./pages/Leadership";
import Faqs from "./pages/resources/Faqs";
import GuidesChecklists from "./pages/resources/GuidesChecklists";
import RudhiCore from "./pages/products/rudhicore";
import RudhiArch from "./pages/products/RudhiArch";
import HospitalMS from "./pages/products/HospitalMS";
import IndustrySecurity from "./pages/products/IndustrySecurity";
import CustomSoftwareServices from "./pages/services/Customsoftwareservices";
import ErpCrmSolutions from "./pages/services/ErpCrmSolutions";
import WebMobileApplications from "./pages/services/WebMobileApplications";
import WorkflowAutomation from "./pages/services/WorkflowAutomation";
import SoftwareIntegration from "./pages/services/SoftwareIntegration";
import CloudDevOps from "./pages/services/CloudDevOps";
import Education from "./pages/industries/Education";
import Construction from "./pages/industries/Construction";
import Healthcare from "./pages/industries/Healthcare";
import Manufacturing from "./pages/industries/Manufacturing";
import BlogListing from "./pages/blog/BlogListing";
import BlogPost from "./pages/blog/BlogPost";
import CaseStudiesListing from "./pages/case-studies/CaseStudiesListing";
import CaseStudyDetail from "./pages/case-studies/CaseStudyDetail";
import Privacy from "./pages/legal/Privacy";
import Terms from "./pages/legal/Terms";
import Cookies from "./pages/legal/Cookies";
import NotFound from "./pages/legal/NotFound";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/"           element={<Home />}       />
          <Route path="/about"      element={<AboutUs />}    />
          <Route path="/services"   element={<Services />}   />
          <Route path="/technology" element={<Technology />} />
          <Route path="/careers"    element={<Careers />}    />
          <Route path="/contact"    element={<Contact />}    />
          <Route path="/products"   element={<ProductsListing />}   />
          <Route path="/industries" element={<IndustriesListing />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/resources/faqs"              element={<Faqs />}             />
          <Route path="/resources/guides-checklists"  element={<GuidesChecklists />} />
          <Route path="/products/rudhicore-school-college-management" element={<RudhiCore />} />
          <Route path="/products/rudhiarch-construction-site-erp"      element={<RudhiArch />} />
          <Route path="/products/hospital-management-system"           element={<HospitalMS />} />
          <Route path="/products/industry-security-system"             element={<IndustrySecurity />} />
          <Route path="/services/custom-software-development"          element={<CustomSoftwareServices />} />
          <Route path="/services/erp-crm-solutions"                    element={<ErpCrmSolutions />} />
          <Route path="/services/web-mobile-applications"              element={<WebMobileApplications />} />
          <Route path="/services/workflow-automation"                  element={<WorkflowAutomation />} />
          <Route path="/services/software-integration"                 element={<SoftwareIntegration />} />
          <Route path="/services/cloud-devops"                         element={<CloudDevOps />} />
          <Route path="/industries/education-school-college-management" element={<Education />} />
          <Route path="/industries/construction-site-management"        element={<Construction />} />
          <Route path="/industries/hospital-clinic-management"          element={<Healthcare />} />
          <Route path="/industries/manufacturing-industrial-security"   element={<Manufacturing />} />
          <Route path="/blog"         element={<BlogListing />} />
          <Route path="/blog/:slug"   element={<BlogPost />}    />
          <Route path="/case-studies"       element={<CaseStudiesListing />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />}    />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms"   element={<Terms />}   />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="*"        element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;