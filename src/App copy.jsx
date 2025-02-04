import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Loader from './components/Loader';
import './styles/animations.css';

// Lazy load all pages
const Home = React.lazy(() => import('./Pages/Home'));
const About = React.lazy(() => import('./Pages/About'));
const Industries = React.lazy(() => import('./Pages/Industries'));
const Portfolio = React.lazy(() => import('./Pages/Portfolio'));
const Careers = React.lazy(() => import('./Pages/Careers'));
const Blogs = React.lazy(() => import('./Pages/Blogs'));
const Contact = React.lazy(() => import('./Pages/Contact'));
const WebDevelopment = React.lazy(() => import('./Pages/Services/WebDevelopment'));
const AppDevelopment = React.lazy(() => import('./Pages/Services/AppDevelopment'));
const WebDesign = React.lazy(() => import('./Pages/Services/WebDesign'));
const DigitalMarketing = React.lazy(() => import('./Pages/Services/DigitalMarketing'));
const Staffing = React.lazy(() => import('./Pages/Services/Staffing'));

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loader isLoading={true} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/staffing" element={<Staffing />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
