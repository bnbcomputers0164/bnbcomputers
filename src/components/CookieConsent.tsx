import React, { useState, useEffect } from 'react';
import { ShieldAlert, X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('bnb_cookie_consent_approved');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500); // Small professional delay
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('bnb_cookie_consent_approved', 'true');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      id="cookie-consent-bar"
      className="fixed bottom-6 left-6 right-6 md:left-12 md:right-auto md:max-w-md z-50 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-slide-up"
    >
      <div className="flex gap-3 items-start">
        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0">
          <ShieldAlert className="w-5 h-5" />
        </div>
        <div className="space-y-0.5">
          <p className="text-xs font-bold text-slate-900 tracking-tight">Cookie & Privacy Notice</p>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            We use essential cookies and state providers to optimize licensing activations and guarantee secure message dispatches. See our <a href="/privacy-policy" className="text-blue-600 font-semibold hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
        <button
          onClick={handleAccept}
          className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap"
        >
          Accept All
        </button>
        <button
          onClick={handleClose}
          className="p-1.5 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
          aria-label="Decline cookies"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
