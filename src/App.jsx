import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LoaderProvider, useLoader } from './context/LoaderContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Industries from './Pages/Industries';
import Portfolio from './Pages/Portfolio';
import Careers from './Pages/Careers';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import WebDevelopment from './Pages/Services/WebDevelopment';
import AppDevelopment from './Pages/Services/AppDevelopment';
import WebDesign from './Pages/Services/WebDesign';
import DigitalMarketing from './Pages/Services/DigitalMarketing';
import Staffing from './Pages/Services/Staffing';
import './styles/animations.css';
import PageLoader from './components/PageLoader';
import { Toaster } from 'react-hot-toast';
import FloatingActionButton from './components/FloatingActionButton';
import PrivacyPolicy from './Pages/privacypolicy';
import BlogDetail from './Pages/BlogDetail';
// import Unsubscriber from './Pages/Unsubscriber';
import Unsubscribe from './Pages/Unsubscribe';

const RouteChangeHandler = ({ children }) => {
  const location = useLocation();
  const { setIsLoading } = useLoader();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust this time as needed

    return () => clearTimeout(timer);
  }, [location.pathname, setIsLoading]);

  return children;
};

const App = () => {
  return (
    <LoaderProvider>
      <BrowserRouter>
        <RouteChangeHandler>
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              duration: 3000,
              style: {
                zIndex: 9999
              },
            }}
          />
          <PageLoader />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:blogId" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/app-development" element={<AppDevelopment />} />
            <Route path="/services/web-design" element={<WebDesign />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/staffing" element={<Staffing />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/unsubscribe" element={<Unsubscribe />} />
          </Routes>
          <Footer />
          <FloatingActionButton />
        </RouteChangeHandler>
      </BrowserRouter>
    </LoaderProvider>
  );
}

export default App;
