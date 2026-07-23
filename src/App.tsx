import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import CookieConsent from './components/CookieConsent';
import BackToTop from './components/BackToTop';
import ScrollToTop from './components/ScrollToTop';

// Lazy loading our page components for maximum performance & code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Products = lazy(() => import('./pages/Products'));
const Blog = lazy(() => import('./pages/Blog'));
const Support = lazy(() => import('./pages/Support'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Premium Loading Screen displayed during page transitions
function LoadingScreen() {
  return (
    <div className="min-h-[80vh] bg-slate-50 flex flex-col justify-center items-center gap-4">
      <div className="w-10 h-10 rounded-full border-4 border-blue-100 border-t-blue-600 animate-spin" />
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest animate-pulse">
        Initializing Accounting Node...
      </p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Scroll restoration helper */}
      <ScrollToTop />
      
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-blue-500 selection:text-white">
        {/* Premium Sticky Header */}
        <Header />

        <main className="flex-grow">
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/support" element={<Support />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        {/* Informative Footer */}
        <Footer />

        {/* Global UI Overlays */}
        <FloatingWidgets />
        <BackToTop />
        <CookieConsent />
      </div>
    </BrowserRouter>
  );
}
