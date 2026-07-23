import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, ArrowRight, CheckCircle2 } from 'lucide-react';
import BNBLogo from './BNBLogo';
import { companyDetails } from '../data/companyData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Background and shadow triggers
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Progress bar calculations
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/products', label: 'Products' },
    { path: '/blog', label: 'Blog' },
    { path: '/support', label: 'Support' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-md border-b border-slate-100 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        {/* Scroll Progress Bar */}
        <div
          className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-400 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Top Info Strip - Hidden on Scroll for clean layout */}
        {!isScrolled && (
          <div className="hidden lg:block border-b border-slate-100/30 pb-3 mb-3">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs text-slate-500">
              <div className="flex items-center gap-4">
                <span>📍 {companyDetails.officeAddress}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-emerald-600 font-medium">Authorized Partner: TallyPrime & BUSY</span>
              </div>
              <div className="flex items-center gap-5">
                <span>📧 {companyDetails.email}</span>
                <span className="font-semibold text-blue-600">📞 {companyDetails.primaryMobile}</span>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="focus:outline-none">
              <BNBLogo size="sm" showTagline={!isScrolled} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-blue-600 bg-blue-50/70 shadow-sm'
                        : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTAs removed */}

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel - Slide Down Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl py-4 px-6 space-y-3 animate-slide-down">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `py-3 px-4 rounded-xl text-base font-semibold transition-all ${
                      isActive
                        ? 'text-blue-600 bg-blue-50/50'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="border-t border-slate-100 pt-4 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500 px-4">
                <span>Support Line:</span>
                <a href={`tel:${companyDetails.rawMobile1}`} className="font-bold text-slate-900">
                  {companyDetails.primaryMobile}
                </a>
              </div>
              
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    const callbackBtn = document.getElementById('floating-callback-btn');
                    if (callbackBtn) callbackBtn.click();
                  }, 300);
                }}
                className="w-full py-3 px-4 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Request Call Back</span>
              </button>
            </div>
          </div>
        )}
      </header>
      {/* Spacer to prevent header from overlapping elements (especially when transparent at first) */}
      <div className="h-16 md:h-24 w-full" />
    </>
  );
}
