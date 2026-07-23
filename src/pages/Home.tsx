import React, { useState, useEffect } from 'react';
import {
  FileText,
  Database,
  Cloud,
  Smartphone,
  MessageCircle,
  Wrench,
  Shield,
  Clock,
  Users,
  CheckCircle2,
  TrendingUp,
  Award,
  Zap,
  GraduationCap,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Search,
  MessageSquare,
  Play,
  X,
  Plus,
  Minus,
  Layers,
  Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import BusyLogo from '../components/BusyLogo';
import {
  companyDetails,
  trustHighlights,
  servicesList,
  productsList,
  whyChooseUs,
  industriesServed,
  processSteps,
  faqs,
  blogArticles,
  galleryItems
} from '../data/companyData';

// ---------------------------------------------------------------------------
// HAND-DRAWN PENCIL-SKETCH ILLUSTRATION (MIRRORS USER'S UPLOADED IMAGE)
// ---------------------------------------------------------------------------
function HandDrawnIllustration() {
  return (
    <svg viewBox="0 0 800 520" fill="none" className="w-full h-auto select-none max-w-lg" xmlns="http://www.w3.org/2000/svg">
      {/* Background shadow/texture */}
      <ellipse cx="400" cy="465" rx="310" ry="18" fill="#f1f5f9" />
      
      {/* GROUND LINE (sketched style) */}
      <path d="M 50 465 Q 400 470 750 465" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="5 5" />
      
      {/* PERSON - COUCH-LIKE LYING POSITION */}
      {/* Legs (blue jeans style) */}
      <path d="M 280 415 C 330 365, 420 285, 520 325 C 580 345, 680 425, 710 425" stroke="#0ea5e9" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" />
      {/* Legs accent contour */}
      <path d="M 290 415 C 335 370, 415 295, 510 330 C 570 350, 660 420, 690 425" stroke="#38bdf8" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Feet / Shoes */}
      <path d="M 710 425 C 720 425, 730 405, 740 355 C 745 335, 730 325, 720 345 C 710 365, 700 395, 705 425 Z" fill="#e2e8f0" stroke="#334155" strokeWidth="2.5" />
      <path d="M 725 365 L 740 360" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Torso (Yellow striped shirt) */}
      <path d="M 180 435 C 170 325, 240 265, 320 345 C 350 375, 390 395, 420 405" stroke="#fbbf24" strokeWidth="44" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* White Stripes on Torso */}
      <path d="M 195 420 Q 185 375 200 335" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
      <path d="M 225 425 Q 215 365 235 325" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
      <path d="M 255 430 Q 245 360 270 330" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
      <path d="M 285 435 Q 280 375 310 350" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
      <path d="M 330 425 Q 330 395 355 375" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
      
      {/* Head & Face */}
      <circle cx="160" cy="255" r="32" fill="#fef08a" stroke="#334155" strokeWidth="2.5" />
      {/* Hair (messy sketched look) */}
      <path d="M 125 245 C 120 215, 150 195, 175 205 C 190 195, 195 225, 185 240 C 195 235, 195 255, 180 260" fill="#1e293b" stroke="#334155" strokeWidth="2" strokeLinejoin="round" />
      {/* Smile & Eyes */}
      <path d="M 165 255 C 167 265, 175 270, 180 265" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="170" cy="240" r="2.5" fill="#334155" />
      
      {/* Left arm holding smartphone */}
      <path d="M 180 415 C 140 415, 120 355, 140 315" stroke="#fbbf24" strokeWidth="16" strokeLinecap="round" />
      {/* Hand holding phone */}
      <circle cx="140" cy="305" r="9" fill="#fef08a" stroke="#334155" strokeWidth="2" />
      {/* Phone */}
      <rect x="115" y="275" width="18" height="32" rx="3" transform="rotate(-15 115 275)" fill="#475569" stroke="#334155" strokeWidth="2" />
      <rect x="118" y="280" width="12" height="22" rx="1" transform="rotate(-15 115 275)" fill="#f8fafc" />
      
      {/* Right arm resting on floor */}
      <path d="M 280 395 C 310 415, 330 435, 320 460" stroke="#fbbf24" strokeWidth="16" strokeLinecap="round" />
      <circle cx="320" cy="460" r="8" fill="#fef08a" stroke="#334155" strokeWidth="2" />

      {/* LAPTOP nearby (resting on floor) */}
      <g transform="translate(330, 395)">
        {/* Screen */}
        <rect x="10" y="5" width="75" height="50" rx="4" fill="#e2e8f0" stroke="#334155" strokeWidth="2.5" />
        <rect x="15" y="10" width="65" height="36" rx="1" fill="#f8fafc" />
        <circle cx="47" cy="28" r="5" fill="#334155" />
        {/* Base */}
        <path d="M 2 57 L 93 57 C 90 63, 80 65, 47 65 C 15 65, 5 63, 2 57 Z" fill="#94a3b8" stroke="#334155" strokeWidth="2.5" />
        <line x1="38" y1="60" x2="56" y2="60" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" />
      </g>

      {/* FLOATING ICONS */}
      
      {/* 1. SECURITY LOCK ICON (Top Center) */}
      <g transform="translate(380, 30)">
        <circle cx="50" cy="50" r="38" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="5 3" />
        <rect x="37" y="46" width="26" height="22" rx="3" fill="#86efac" stroke="#16a34a" strokeWidth="2" />
        <path d="M 42 46 V 38 C 42 32, 58 32, 58 38 V 46" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
        <circle cx="50" cy="55" r="2.5" fill="#16a34a" />
        <path d="M 50 57.5 V 63" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" />
        {/* Arrow circular loop */}
        <path d="M 15 50 C 15 28, 85 28, 85 50 C 85 72, 15 72, 15 50" fill="none" stroke="#10b981" strokeWidth="1.2" strokeDasharray="3 3" />
        <path d="M 46 16 L 50 12 L 46 8" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 54 84 L 50 88 L 54 92" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* 2. DOCUMENT WITH PEN (Top Left) */}
      <g transform="translate(130, 65)">
        <circle cx="50" cy="50" r="34" fill="#f0f9ff" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="5 3" />
        <rect x="34" y="30" width="28" height="38" rx="3" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
        <line x1="40" y1="38" x2="52" y2="38" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="40" y1="45" x2="56" y2="45" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="40" y1="52" x2="54" y2="52" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" />
        {/* Pen */}
        <g transform="translate(64, 28) rotate(25)">
          <path d="M 0 0 L 5 30 L 2 33 L 0 30 Z" fill="#fda4af" stroke="#e11d48" strokeWidth="1.8" />
        </g>
      </g>

      {/* 3. IDEA & BUSINESS INSIGHT LIGHTBULB (Top Right) */}
      <g transform="translate(560, 65)">
        <circle cx="50" cy="50" r="36" fill="#fffbeb" stroke="#d97706" strokeWidth="1.5" strokeDasharray="5 3" />
        <path d="M 39 52 C 34 41, 37 30, 50 30 C 63 30, 66 41, 61 52 C 58 56, 57 59, 57 63 H 43 C 43 59, 42 56, 39 52 Z" fill="#fef08a" stroke="#d97706" strokeWidth="2" strokeLinejoin="round" />
        <rect x="45" y="63" width="10" height="5" rx="1" fill="#94a3b8" stroke="#475569" strokeWidth="1.8" />
        <rect x="46" y="68" width="8" height="3" rx="1" fill="#64748b" stroke="#475569" strokeWidth="1.8" />
        <path d="M 44 50 L 48 45 L 52 48 L 56 40" fill="none" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

export default function Home() {
  // States for interactive components
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'Tally' | 'BUSY' | 'Cloud'>('all');
  const [lightboxItem, setLightboxItem] = useState<{ url: string; title: string; type: 'image' | 'video' } | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate gallery slides every 5 seconds
  useEffect(() => {
    if (galleryItems.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  // Quick callback form state
  const [callbackForm, setCallbackForm] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    software: 'TallyPrime ERP License',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // States for Interactive Software Matchmaker
  const [matchStep, setMatchStep] = useState(0);
  const [matchAnswers, setMatchAnswers] = useState({
    businessType: '',
    scale: '',
    remoteNeeded: '',
  });

  // State for side-by-side comparison tab
  const [compareTab, setCompareTab] = useState<'features' | 'pricing' | 'usability'>('features');

  const openEmailClient = (details: { name: string; phone: string; businessName?: string; email?: string; software?: string; message?: string }) => {
    const emailSubject = `BNB Homepage Callback Request: ${details.businessName || details.name}`;
    const emailBody = `Respected BNB COMPUTERS Team,\n\n` +
      `I am requesting a priority callback regarding Tally / BUSY / IT Cloud Services. Here are my contact details:\n\n` +
      `• Name: ${details.name}\n` +
      `• Mobile / Phone: ${details.phone}\n` +
      `• Email: ${details.email || 'Not Provided'}\n` +
      `• Business / Firm Name: ${details.businessName || 'Not Provided'}\n` +
      `• Software / Solution Interest: ${details.software || 'General Inquiry'}\n` +
      `• Message: ${details.message || 'Please contact me for a detailed discussion.'}\n\n` +
      `Regards,\n${details.name}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(companyDetails.email)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    const mailtoUrl = `mailto:${companyDetails.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Open Gmail Web Compose in a new tab immediately
    window.open(gmailUrl, '_blank');

    // Also trigger mailto as fallback for local desktop apps
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = mailtoUrl;
      link.target = '_top';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 300);
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackForm.name || !callbackForm.phone) return;
    
    // Show channel selection screen (Email or WhatsApp)
    setIsSubmitted(true);
  };

  const handleEmailAction = () => {
    openEmailClient(callbackForm);
  };

  // Helper mapping string to Lucide icon
  const getIcon = (name: string) => {
    switch (name) {
      case 'FileText': return <FileText className="w-6 h-6 text-blue-600" />;
      case 'Clock': return <Clock className="w-6 h-6 text-blue-600" />;
      case 'Database': return <Database className="w-6 h-6 text-blue-600" />;
      case 'Zap': return <Zap className="w-6 h-6 text-blue-600" />;
      case 'Cloud': return <Cloud className="w-6 h-6 text-blue-600" />;
      case 'MessageCircle': return <MessageCircle className="w-6 h-6 text-emerald-500" />;
      case 'Layers': return <Layers className="w-6 h-6 text-blue-600" />;
      case 'Shield': return <Shield className="w-6 h-6 text-blue-600" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-blue-600" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-blue-600" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-blue-600" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-blue-600" />;
      case 'Award': return <Award className="w-6 h-6 text-blue-600" />;
      case 'Users': return <Users className="w-6 h-6 text-blue-600" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-blue-600" />;
      default: return <FileText className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen overflow-x-hidden">
      <SEO
        title="Simplifying Business Accounting with Trusted Software Solutions"
        description="Authorized Partners for TallyPrime and BUSY Accounting Software. We provide licenses, cloud server setups, customization, training, and remote support in Bathinda, Punjab."
      />

      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50/30">
        {/* Animated backdrop elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDuration: '6s' }} />
        <div className="absolute -left-10 bottom-20 w-80 h-80 bg-emerald-100/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100/70">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">
                  Bathinda's Top IT Accounting Solutions Provider
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Simplifying Business Accounting with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Trusted Software</span> Solutions
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Authorized Partner for <strong>TallyPrime</strong> & <strong>BUSY Accounting Software</strong>. Helping businesses automate accounting, GST, inventory, payroll and business management with reliable, customized local support.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('callback-request-form-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:scale-103 active:scale-97 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Request Callback</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`https://wa.me/91${companyDetails.rawMobile1}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm rounded-xl border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-500 fill-current" />
                  <span>Talk to an Expert</span>
                </a>
              </div>

              {/* Verified badges */}
              <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 border-t border-slate-100 mt-8">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500" />
                  <span>Certified Partners</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500" />
                  <span>2000+ Deployments</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500" />
                  <span>Instant Punjab Support</span>
                </div>
              </div>
            </div>

            {/* Hero Right Content - Redesigned with the hand-drawn illustration and partner details */}
            <div className="lg:col-span-5 relative flex flex-col items-center gap-6">
              {/* Decorative sketchy background glow */}
              <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
              
              {/* Real Hand-Drawn Sketch Illustration (the exact artwork from the user's upload!) */}
              <div className="w-full relative z-10 animate-scale-up">
                <HandDrawnIllustration />
              </div>

              {/* High-End, Creative Summary Card bridging the artwork to BNB Computers' value proposition */}
              <div className="relative w-full bg-white rounded-2xl border border-slate-200/60 p-5 shadow-lg space-y-4 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 pb-3 border-b border-slate-100">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Operational Promise</span>
                  <span className="w-fit mx-auto sm:mx-0 px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-[9px] font-bold tracking-wider uppercase border border-blue-100">
                    100% Peace of Mind
                  </span>
                </div>
                <h3 className="text-sm font-extrabold text-slate-800 tracking-tight leading-snug">
                  We handle the compliance so you can focus on growth
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                  We install, configure, backup, and customize your accounting servers. Whether you use <strong>TallyPrime</strong>, <strong>BUSY</strong>, or our high-performance <strong>Cloud Host</strong>, we ensure absolute continuity.
                </p>
                <div className="flex flex-wrap gap-2 pt-1 justify-center sm:justify-start">
                  <span className="px-2 py-0.5 bg-teal-50 text-teal-850 rounded text-[9px] font-bold border border-teal-100">Tally Certified Partner</span>
                  <span className="px-2 py-0.5 bg-rose-50 text-rose-850 rounded text-[9px] font-bold border border-rose-100">Busy Channel Partner</span>
                  <span className="px-2 py-0.5 bg-indigo-50 text-indigo-850 rounded text-[9px] font-bold border border-indigo-100">99.9% Cloud SLA</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          STATISTICS COUNTER SECTION REMOVED PER USER REQUEST
          ========================================================================= */}

      {/* =========================================================================
          TRUST SECTION / BRAND TRUST HIGHLIGHTS
          ========================================================================= */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">Trust Framework</h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why 2000+ Business Trust Us
            </h3>
            <p className="text-xs text-slate-500">
              Complete support ecosystem ensuring absolute accounting continuity and zero statutory penalties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustHighlights.map((highlight, index) => {
              const IconComp = highlight.icon;
              return (
                <div
                  key={index}
                  className="p-5 bg-white rounded-xl border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex gap-4"
                >
                  <div className="p-2.5 h-fit bg-blue-50 text-blue-600 rounded-lg shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-800">{highlight.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE ACCOUNTING SOLUTIONS MATCHMAKER (BETTER THAN TALLY SOLUTIONS)
          ========================================================================= */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle decorative sketchy grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-amber-800 text-[11px] font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-amber-600 fill-current" />
              <span>Smart Solutions Engine</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Find Your Perfect Software Match
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed max-w-lg mx-auto">
              Answer 3 quick questions about your business operations. Our matchmaker analyzes your needs and suggests the exact Tally or BUSY configuration instantly.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-xl relative">
            {/* Step Indicators */}
            <div className="flex items-center justify-between max-w-md mx-auto mb-8 border-b border-slate-200 pb-4">
              {[0, 1, 2, 3].map((stepIdx) => (
                <div key={stepIdx} className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center transition-all ${
                    matchStep === stepIdx
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                      : matchStep > stepIdx
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-200 text-slate-500'
                  }`}>
                    {stepIdx === 3 ? '✓' : stepIdx + 1}
                  </div>
                  {stepIdx < 3 && (
                    <div className={`w-8 sm:w-12 h-0.5 transition-all ${
                      matchStep > stepIdx ? 'bg-emerald-500' : 'bg-slate-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            {/* Step Contents */}
            {matchStep === 0 && (
              <div className="space-y-6 animate-fade-in">
                <h4 className="text-base sm:text-lg font-bold text-slate-800 text-center tracking-tight">
                  Step 1: What is your primary business activity?
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'retail', title: 'Retail Shop / Trading / Wholesale', desc: 'Need fast POS billing, barcodes, inventory ledger, batch logs, and GST invoices.', icon: <FileText className="w-5 h-5" /> },
                    { id: 'manufacturing', title: 'Manufacturing / Assembly', desc: 'Need production planning, Bill of Materials (BOM), raw-material stock tracking, and cost estimations.', icon: <Database className="w-5 h-5" /> },
                    { id: 'service', title: 'Services / Professional / CA', desc: 'Need professional billing, time-tracking, continuous ledgers, GST audit trails, and multi-currency support.', icon: <Users className="w-5 h-5" /> },
                    { id: 'general', title: 'General Accounting only', desc: 'Need simple debit-credit ledgers, cash flow registers, financial reporting, and standard GST filing.', icon: <Clock className="w-5 h-5" /> }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setMatchAnswers({ ...matchAnswers, businessType: opt.id });
                        setMatchStep(1);
                      }}
                      className={`text-left p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex gap-4 ${
                        matchAnswers.businessType === opt.id
                          ? 'bg-blue-50/50 border-blue-500 shadow-md shadow-blue-50'
                          : 'bg-white border-slate-200/70 hover:border-blue-300 hover:shadow-sm'
                      }`}
                    >
                      <div className="p-2 bg-blue-50 text-blue-600 rounded-lg h-fit">{opt.icon}</div>
                      <div className="space-y-1">
                        <h5 className="text-xs sm:text-sm font-bold text-slate-800">{opt.title}</h5>
                        <p className="text-[11px] text-slate-500 leading-normal">{opt.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {matchStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <h4 className="text-base sm:text-lg font-bold text-slate-800 text-center tracking-tight">
                  Step 2: What is your scale of operation?
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: 'micro', title: 'Micro Business / Single Operator', desc: 'Single computer setup, local accounting, standard entries.', icon: <Smartphone className="w-5 h-5" /> },
                    { id: 'smb', title: 'Growing SMB (1-5 users)', desc: 'Multiple computers connected over network, real-time sync, shared ledger billing.', icon: <Layers className="w-5 h-5" /> },
                    { id: 'enterprise', title: 'Large Enterprise / Multi-branch', desc: 'Multiple godowns, branches across regions, absolute data protection and heavy workloads.', icon: <Award className="w-5 h-5" /> }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setMatchAnswers({ ...matchAnswers, scale: opt.id });
                        setMatchStep(2);
                      }}
                      className={`text-left p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex flex-col gap-3 h-full ${
                        matchAnswers.scale === opt.id
                          ? 'bg-blue-50/50 border-blue-500 shadow-md shadow-blue-50'
                          : 'bg-white border-slate-200/70 hover:border-blue-300 hover:shadow-sm'
                      }`}
                    >
                      <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg h-fit w-fit">{opt.icon}</div>
                      <div className="space-y-1">
                        <h5 className="text-xs sm:text-sm font-bold text-slate-800">{opt.title}</h5>
                        <p className="text-[11px] text-slate-500 leading-relaxed">{opt.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="flex justify-between pt-4 border-t border-slate-100">
                  <button onClick={() => setMatchStep(0)} className="text-xs font-bold text-slate-500 hover:text-slate-800 cursor-pointer">← Back to Activity</button>
                </div>
              </div>
            )}

            {matchStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h4 className="text-base sm:text-lg font-bold text-slate-800 text-center tracking-tight">
                  Step 3: What is your remote accessibility requirement?
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: 'office', title: 'Office-bound Only', desc: 'Accounting will be handled locally at a single business PC without remote needs.', icon: <Clock className="w-5 h-5" /> },
                    { id: 'hybrid', title: 'Mobile Report Checking', desc: 'Need simple read-only access to view outstanding balances, sales reports, and stock on mobile.', icon: <TrendingUp className="w-5 h-5" /> },
                    { id: 'cloud', title: 'Full Cloud Remote Access', desc: 'Need active multi-user concurrent data entry from anywhere on laptops, tablets, or web browsers.', icon: <Cloud className="w-5 h-5" /> }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        const answers = { ...matchAnswers, remoteNeeded: opt.id };
                        setMatchAnswers(answers);
                        setMatchStep(3);
                      }}
                      className={`text-left p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex flex-col gap-3 h-full ${
                        matchAnswers.remoteNeeded === opt.id
                          ? 'bg-blue-50/50 border-blue-500 shadow-md shadow-blue-50'
                          : 'bg-white border-slate-200/70 hover:border-blue-300 hover:shadow-sm'
                      }`}
                    >
                      <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg h-fit w-fit">{opt.icon}</div>
                      <div className="space-y-1">
                        <h5 className="text-xs sm:text-sm font-bold text-slate-800">{opt.title}</h5>
                        <p className="text-[11px] text-slate-500 leading-relaxed">{opt.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="flex justify-between pt-4 border-t border-slate-100">
                  <button onClick={() => setMatchStep(1)} className="text-xs font-bold text-slate-500 hover:text-slate-800 cursor-pointer">← Back to Scale</button>
                </div>
              </div>
            )}

            {matchStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                {/* Result Calculation Logic */}
                {(() => {
                  let recommendedSoftware = '';
                  let tagline = '';
                  let whyRecommended = '';
                  let estimatedPrice = '';
                  let keyFeatures: string[] = [];

                  const { businessType, scale, remoteNeeded } = matchAnswers;

                  if (businessType === 'manufacturing') {
                    recommendedSoftware = 'BUSY Accounting Standard or Enterprise Edition';
                    tagline = 'The Ultimate Choice for Production units and Factories';
                    whyRecommended = 'Busy is world-renowned for its multi-level Bill of Materials (BOM), advanced raw material batching, process control, and cost center calculations. For any manufacturer, it offers comprehensive control with no custom coding needed.';
                    estimatedPrice = 'Starting Rs. 8,000 + GST';
                    keyFeatures = ['Multi-level Bill of Materials (BOM)', 'Raw material batch & waste logs', 'Job work process auditing', 'Detailed cost center analytics'];
                  } else if (remoteNeeded === 'cloud') {
                    recommendedSoftware = 'TallyPrime Gold with BNB Cloud Access';
                    tagline = 'Multi-User Desktop ERP, Hosted on Ultra-Fast Cloud';
                    whyRecommended = 'Perfect for multi-user wholesale or multi-branch trading. We host the reliable TallyPrime Gold on high-performance isolated RDP servers. Your team can do concurrent remote billing safely with 100% ransomware defense.';
                    estimatedPrice = 'Starting Rs. 22,500 + GST for License + Custom Cloud Hosting';
                    keyFeatures = ['99.9% Live SLA Cloud Uptime', 'Isolated automatic backups', 'Concurrent multi-location ledger entries', 'Universal device compatibility (Mac, iPad, Windows)'];
                  } else if (businessType === 'retail' && scale === 'micro') {
                    recommendedSoftware = 'BUSY Accounting Basic Edition (Single User)';
                    tagline = 'Fast, Fluid, and Fully Compliant Local Retail Billing';
                    whyRecommended = 'An incredibly budget-friendly yet powerhouse software for retail shops. Built-in instant barcoding, POS billing, user access rights, and standard GST filing forms out of the box.';
                    estimatedPrice = 'Rs. 5,000 + GST (Perpetual)';
                    keyFeatures = ['Instant thermal POS billing', 'Direct barcode sticker printing', 'Inventory stock valuation logs', 'Standard local GST forms'];
                  } else if (businessType === 'service' || scale === 'smb') {
                    recommendedSoftware = 'TallyPrime Gold (Multi-User) or Silver (Single-User)';
                    tagline = 'India\'s Premier Chartered Accountant-Preferred ERP';
                    whyRecommended = 'TallyPrime is the absolute choice for compliance, service agencies, and growing traders. With its keyboard-driven fast navigation, direct CA ledger synchronization, and robust GST e-way / e-invoice dispatch, your compliance remains flawless.';
                    estimatedPrice = 'Rs. 22,500 + GST (Silver) | Rs. 67,500 + GST (Gold)';
                    keyFeatures = ['Instant e-way bills and e-invoices', 'Chartered Accountant direct sync', 'Comprehensive auditing and edit logs', 'TallyPrime mobile reports companion'];
                  } else {
                    recommendedSoftware = 'TallyPrime & BUSY Accounting Hybrid Configuration';
                    tagline = 'Custom Dual ERP Integration by BNB Computers';
                    whyRecommended = 'A bespoke configuration tailored to handle heavy wholesale operations alongside advanced manufacture controls. Built by our senior specialists in Bathinda, Punjab.';
                    estimatedPrice = 'Custom Quote Based on Architecture';
                    keyFeatures = ['Tailored WhatsApp automation integration', 'Custom TDL report builders', 'Continuous local support SLA', 'Automated data data backup routines'];
                  }

                  return (
                    <div className="space-y-6">
                      <div className="text-center space-y-2">
                        <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-wider border border-emerald-100">
                          Your Solution Match is Ready
                        </span>
                        <h4 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                          {recommendedSoftware}
                        </h4>
                        <p className="text-xs text-blue-600 font-extrabold italic">
                          {tagline}
                        </p>
                      </div>

                      <div className="bg-white border border-slate-200/60 rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm">
                        <div className="space-y-2">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Why it\'s recommended:</p>
                          <p className="text-xs text-slate-600 leading-relaxed font-medium">
                            {whyRecommended}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                          <div className="space-y-2">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pricing Structure:</p>
                            <p className="text-sm font-black text-slate-800">{estimatedPrice}</p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Included Deliverables:</p>
                            <div className="space-y-1">
                              {keyFeatures.map((feat, i) => (
                                <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                  <span>{feat}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
                        <button
                          onClick={() => {
                            setCallbackForm((prev) => ({
                              ...prev,
                              software: recommendedSoftware,
                              message: `I ran the BNB matchmaker and was recommended ${recommendedSoftware}. Please send me the final pricing sheet and schedule a demo.`
                            }));
                            const el = document.getElementById('callback-request-form-section');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-transform hover:scale-103 cursor-pointer flex items-center justify-center gap-2"
                        >
                          <Zap className="w-4 h-4 text-amber-300 fill-current" />
                          <span>Get Free Demo & Quote</span>
                        </button>
                        <button
                          onClick={() => {
                            setMatchAnswers({ businessType: '', scale: '', remoteNeeded: '' });
                            setMatchStep(0);
                          }}
                          className="px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                        >
                          Restart Matchmaker
                        </button>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          TALLYPRIME CLOUD ACCESS PREMIER SHOWCASE (LARGE, ATTRACTIVE & SPACIOUS)
          ========================================================================= */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white relative overflow-hidden">
        {/* Decorative background visual lights */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_55%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.1),transparent_55%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left side: Bold, descriptive copy with spacious margins */}
            <div className="lg:col-span-6 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-xs font-black uppercase tracking-wider">
                <Cloud className="w-4 h-4 text-blue-400 animate-pulse" />
                <span>Premier Cloud Capability</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                  TallyPrime Cloud Access
                </h2>
                <p className="text-sm text-slate-300 font-semibold uppercase tracking-wider text-blue-400">
                  Your Desktop Accounting Software, Hosted Securely on the Cloud
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Bridge the gap between traditional reliability and modern flexibility. Our high-performance RDP servers host your standard offline TallyPrime or BUSY application so your team can generate bills and check ledgers safely from any laptop, Mac, tablet, or phone.
                </p>
              </div>

              {/* Grid of attractive features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex gap-3 items-start">
                  <div className="p-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg shrink-0 mt-0.5">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black tracking-wide uppercase text-slate-200">Device Agnostic</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Work flawlessly from Windows, macOS, Android, iOS, or ChromeOS web browsers.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg shrink-0 mt-0.5">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black tracking-wide uppercase text-slate-200">Ransomware Defense</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Automated snapshots, continuous backup isolation, and state-of-the-art secure firewalls.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="p-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-lg shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black tracking-wide uppercase text-slate-200">99.9% Live SLA</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Ultra-low latency connection, running on premium Indian tier-IV datacenters.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="p-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-lg shrink-0 mt-0.5">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black tracking-wide uppercase text-slate-200">Printer & Scanner Support</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Supports instant local thermal printing, invoice receipts, and USB barcode scanners.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    const el = document.getElementById('callback-request-form-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-lg transition-transform hover:scale-103 cursor-pointer flex items-center gap-2"
                >
                  <span>Request Live Cloud Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right side: Elegant Cloud Dashboard illustration card */}
            <div className="lg:col-span-6 flex justify-center relative">
              <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl" />
              
              <div className="relative max-w-lg w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-slate-700" />
                    <span className="text-xs font-semibold text-slate-400 tracking-wide uppercase">Cloud Architecture</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold px-2 py-0.5 bg-emerald-500/10 rounded-md border border-emerald-500/20">
                    Active System
                  </span>
                </div>

                <div className="space-y-4">
                  <h4 className="text-base font-bold text-white tracking-tight">
                    Optimized Cloud ERP Environment
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    BNB Computers hosts accounting environments on premium tier-IV datacenters in India, specifically tuned for instant local print dispatch and sub-20ms screen refresh.
                  </p>
                </div>

                {/* Grid of tangible features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950/50 border border-slate-800/80 rounded-2xl space-y-2">
                    <Cloud className="w-5 h-5 text-blue-400" />
                    <h5 className="text-xs font-bold text-white">Full Multi-User Sync</h5>
                    <p className="text-[10px] text-slate-400">Concurrent ledger entries with real-time replication.</p>
                  </div>

                  <div className="p-4 bg-slate-950/50 border border-slate-800/80 rounded-2xl space-y-2">
                    <Shield className="w-5 h-5 text-emerald-400" />
                    <h5 className="text-xs font-bold text-white">Continuous Backups</h5>
                    <p className="text-[10px] text-slate-400">Isolated snapshots processed every 24 hours automatically.</p>
                  </div>

                  <div className="p-4 bg-slate-950/50 border border-slate-800/80 rounded-2xl space-y-2">
                    <Smartphone className="w-5 h-5 text-amber-400" />
                    <h5 className="text-xs font-bold text-white">Mobile RDP Native</h5>
                    <p className="text-[10px] text-slate-400">Custom touch keyboard layouts for smartphones and tablets.</p>
                  </div>

                  <div className="p-4 bg-slate-950/50 border border-slate-800/80 rounded-2xl space-y-2">
                    <Wrench className="w-5 h-5 text-purple-400" />
                    <h5 className="text-xs font-bold text-white">Local Hardware Bridge</h5>
                    <p className="text-[10px] text-slate-400">Flawless passthrough for USB dongles and barcode scanners.</p>
                  </div>
                </div>

                <div className="text-[11px] text-slate-500 font-mono text-center">
                  SLA uptime backed by certified database administrators
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          ABOUT BRIEF SECTION
          ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* About Left */}
            <div className="lg:col-span-5 relative">
              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                  alt="BNB Computers Bathinda Office"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">Serving Since 2014</p>
                  <h4 className="text-lg font-black tracking-tight">BNB Computers Headquarters</h4>
                  <p className="text-xs text-slate-300">Bathinda, Punjab, India - Hub of Accounting ERP</p>
                </div>
              </div>
              
              {/* Overlay partner stamp */}
              <div className="absolute -bottom-6 -right-6 p-4 bg-white rounded-xl shadow-lg border border-slate-100 max-w-xs text-center">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Status Checked</p>
                <p className="text-xs font-bold text-slate-800">Authorized TallyPrime Gold & BUSY Enterprise Partners</p>
              </div>
            </div>

            {/* About Right */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Company Introduction</span>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                  Simplifying Corporate Operations Across North India
                </h3>
              </div>

              <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
                <p>
                  <strong>BNB COMPUTERS</strong> is the premier information technology consulting and accounting software integration firm based in Bathinda, Punjab. As authorized development and sales partners for both TallyPrime and BUSY Accounting Software, we have engineered tailored accounting and inventory systems for over 2000 satisfied corporate clients.
                </p>
                <p>
                  From single-user retail billing systems to enterprise-grade multi-branch cloud hosting, our certified engineering team delivers complete operational assurance. We bridge technical software gaps using custom TDL customizations, automated WhatsApp billing dispatch, and live remote assistance.
                </p>
              </div>

              {/* Mission & Vision */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5">
                  <h4 className="text-xs font-bold text-blue-600 uppercase tracking-wider">Our Mission</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    To eliminate operational friction and manual errors for MSMEs by implementing structured, compliant, and deeply automated accounting workflows.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5">
                  <h4 className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Our Vision</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    To establish complete digital transformation for business owners, enabling live multi-device access with 100% ransomware and statutory audit security.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICES LIST SECTION (Admin Reusable & Expandable)
          ========================================================================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Services Catalog</span>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                Our Complete Solution Portfolio
              </h3>
              <p className="text-xs text-slate-500 max-w-xl">
                Certified implementation, on-site setup, ledger audits, continuous support SLA, and customized reporting extensions.
              </p>
            </div>

            {/* Quick Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {['all', 'Tally', 'BUSY', 'Cloud'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category as any)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeTab === category
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {category === 'all' ? 'All Services' : `${category} Solutions`}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList
              .filter((service) => {
                if (activeTab === 'all') return true;
                return service.title.toLowerCase().includes(activeTab.toLowerCase()) || 
                       service.description.toLowerCase().includes(activeTab.toLowerCase());
              })
              .map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="p-3 bg-blue-50/50 rounded-xl group-hover:bg-blue-50 transition-colors h-fit w-fit shrink-0">
                        {getIcon(service.iconName)}
                      </div>
                      {service.badge && (
                        <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 rounded-full">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-base font-bold text-slate-900 tracking-tight">{service.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Deliverables:</p>
                    <ul className="space-y-1.5">
                      {service.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-[11px] text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          PRODUCTS SHOWCASE SECTION
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Core Systems</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Best-In-Class ERP Packages
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              We customize and deploy India's absolute finest financial applications to power your inventory, payroll, and statutory tax compliance.
            </p>
          </div>

          <div className="space-y-16">
            {productsList.map((product, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={product.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Product Image Panel */}
                  <div className={`lg:col-span-5 ${isEven ? '' : 'lg:order-2'}`}>
                    <div className="relative overflow-hidden rounded-2xl shadow-xl border border-slate-100 group">
                      <img
                        src={product.imagePlaceholder}
                        alt={product.title}
                        className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 rounded-lg shadow-md">
                          {product.badge || 'Verified Solution'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Product Details Panel */}
                  <div className={`lg:col-span-7 space-y-5 ${isEven ? '' : 'lg:order-1'}`}>
                    <div className="space-y-1.5">
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{product.title}</h3>
                      <p className="text-sm font-bold text-blue-600 italic">{product.subtitle}</p>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed">{product.description}</p>

                    <div className="space-y-2">
                      <p className="text-xs font-bold text-slate-700">Key Strengths:</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                        {product.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2 text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                      <div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">Pricing Structure</p>
                        <p className="text-sm font-extrabold text-slate-800">{product.pricingRange}</p>
                      </div>
                      <button
                        onClick={() => {
                          setCallbackForm((prev) => ({
                            ...prev,
                            software: product.title,
                            message: `Hi BNB Computers, I am interested in details and quotes for ${product.title}.`
                          }));
                          const el = document.getElementById('callback-request-form-section');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg shadow-md transition-all cursor-pointer whitespace-nowrap"
                      >
                        {product.ctaText}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          TALLYPRIME VS BUSY - DETAILED SIDE-BY-SIDE MATRIX (BETTER THAN TALLY SOLUTIONS)
          ========================================================================= */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Decision Toolkit</span>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight">
              TallyPrime vs BUSY Accounting
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We are official, certified implementation partners for both software platforms. Here is our completely unbiased, professional comparison to help you choose the right fit.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-lg overflow-hidden">
            {/* Tab selector for comparison dimensions */}
            <div className="flex border-b border-slate-100 bg-slate-50/50">
              {[
                { id: 'features', label: 'Core Capabilities' },
                { id: 'pricing', label: 'Pricing Model' },
                { id: 'usability', label: 'UI & Customization' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setCompareTab(tab.id as any)}
                  className={`flex-1 py-4 text-xs sm:text-sm font-bold border-b-2 transition-colors cursor-pointer ${
                    compareTab === tab.id
                      ? 'border-blue-600 text-blue-600 bg-white'
                      : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Comparison Matrix Tables */}
            <div className="p-6 overflow-x-auto">
              <table className="w-full min-w-[600px] text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider w-[24%]">Metric</th>
                    <th className="py-3 px-4 bg-teal-50/40 rounded-t-xl text-xs font-black text-teal-900 uppercase tracking-wider w-[38%]">
                      <div className="flex items-center gap-2">
                        <svg className="h-6 w-auto select-none" viewBox="0 0 190 40" fill="none" id="tally-mini-logo">
                          <text x="2" y="28" fontFamily="sans-serif" fontWeight="900" fontSize="24" fontStyle="italic" fill="#0f172a">Tally</text>
                          <path d="M 2 32 C 20 35, 55 36, 76 30" stroke="#00A5C4" strokeWidth="2.5" />
                          <text x="102" y="28" fontFamily="sans-serif" fontWeight="600" fontSize="22" fill="#0f172a">Prime</text>
                        </svg>
                      </div>
                    </th>
                    <th className="py-3 px-4 bg-rose-50/40 rounded-t-xl text-xs font-black text-rose-900 uppercase tracking-wider w-[38%]">
                      <div className="flex items-center gap-2">
                        <BusyLogo className="h-7 w-auto" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {compareTab === 'features' && (
                    <>
                      <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                        <td className="py-4.5 px-4 text-xs font-bold text-slate-800">Ideal User Fit</td>
                        <td className="py-4.5 px-4 text-xs text-slate-600 bg-teal-50/10">CAs, Auditors, general traders, and businesses requiring structured statutory auditing.</td>
                        <td className="py-4.5 px-4 text-xs text-slate-600 bg-rose-50/10">Retailers, manufacturers, distributors, and businesses requiring complex stock/batch controls.</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                        <td className="py-4.5 px-4 text-xs font-bold text-slate-800">Inventory Handling</td>
                        <td className="py-4.5 px-4 text-xs text-slate-600 bg-teal-50/10">Excellent standard inventory with simple tracking, multiple godowns, and stock groups.</td>
                        <td className="py-4.5 px-4 text-xs text-slate-600 bg-rose-50/10">Advanced inventory with built-in multi-parameter barcoding, parameter tracking (size, color, brand), batch logs, and expiry control.</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                        <td className="py-4.5 px-4 text-xs font-bold text-slate-800">Manufacturing Module</td>
                        <td className="py-4.5 px-4 text-xs text-slate-600 bg-teal-50/10">Supports basic Bill of Materials (BOM) and stock journal journals. Perfect for light assembly.</td>
                        <td className="py-4.5 px-4 text-xs text-slate-600 bg-rose-50/10">Comprehensive Manufacturing. Features multi-level BOM, raw material reservation, wastage tracking, and job work orders.</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                        <td className="py-4.5 px-4 text-xs font-bold text-slate-800">Mobile Reports</td>
                        <td className="py-4.5 px-4 text-xs text-slate-600 bg-teal-50/10">Inbuilt Tally Mobile App. Clean read-only visual dashboards for owners.</td>
                        <td className="py-4.5 px-4 text-xs text-slate-600 bg-rose-50/10">BUSY Mobile App. Supports both reading financial statistics and active sales order booking.</td>
                      </tr>
                    </>
                  )}

                  {compareTab === 'pricing' && (
                    <>
                      <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                        <td className="py-4.5 px-4 text-xs font-bold text-slate-800">Single-User Subscription (360 Days)</td>
                        <td className="py-4.5 px-4 text-xs text-slate-600 bg-teal-50/10">Rs. 22,500 + GST (Silver/Single-User perpetual license).</td>
                        <td className="py-4.5 px-4 text-xs text-slate-600 bg-rose-50/10 font-medium">
                          <div className="space-y-1">
                            <div>• <strong className="text-blue-700">Basic / Blue:</strong> Rs 5000 + GST (360 Days)</div>
                            <div>• <strong className="text-amber-700">Standard / Saffron:</strong> Rs 8000 + GST (360 Days)</div>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                        <td className="py-4.5 px-4 text-xs font-bold text-slate-800">Multi-User Subscription (360 Days)</td>
                        <td className="py-4.5 px-4 text-xs text-slate-600 bg-teal-50/10">Rs. 67,500 + GST (Gold/Unlimited-Users LAN license).</td>
                        <td className="py-4.5 px-4 text-xs text-slate-600 bg-rose-50/10 font-medium">
                          <div className="space-y-1">
                            <div>• <strong className="text-blue-700">Basic / Blue:</strong> Rs 12500 + GST (360 Days)</div>
                            <div>• <strong className="text-amber-700">Standard / Saffron:</strong> Rs 18000 + GST (360 Days)</div>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                        <td className="py-4.5 px-4 text-xs font-bold text-slate-800">Subscription Duration & Cost Structure</td>
                        <td className="py-4.5 px-4 text-xs text-slate-600 bg-teal-50/10">Annual TSS updates for continuous features & cloud sync.</td>
                        <td className="py-4.5 px-4 text-xs text-slate-600 bg-rose-50/10 leading-relaxed">
                          Subscription Licenses have same cost. Purchase available for <strong>360 Days</strong> and <strong>1080 Days</strong>.
                        </td>
                      </tr>
                    </>
                  )}

                  {compareTab === 'usability' && (
                    <>
                      <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                        <td className="py-4.5 px-4 text-xs font-bold text-slate-800">User Interface Style</td>
                        <td className="py-4.5 px-4 text-xs text-slate-600 bg-teal-50/10">Highly optimized for keyboard entry. Fast, clean menus with minimal mouse requirement.</td>
                        <td className="py-4.5 px-4 text-xs text-slate-600 bg-rose-50/10">Form-based classic Windows design. Comprehensive menus, mouse-friendly, with custom fields everywhere.</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                        <td className="py-4.5 px-4 text-xs font-bold text-slate-800">Customization Flexibility</td>
                        <td className="py-4.5 px-4 text-xs text-slate-600 bg-teal-50/10">Extremely High. Custom TDL modules let developers modify screen inputs, vouchers, and add automated WhatsApp/SMS hooks.</td>
                        <td className="py-4.5 px-4 text-xs text-slate-600 bg-rose-50/10">Medium-High. Massive set of built-in configurations. Extremely flexible invoice designer, but structural database changes are locked.</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                        <td className="py-4.5 px-4 text-xs font-bold text-slate-800">Auditor Compatibility</td>
                        <td className="py-4.5 px-4 text-xs text-slate-600 bg-teal-50/10">Universal. 99% of Indian Chartered Accountants prefer Tally data files directly, ensuring zero friction in tax filing.</td>
                        <td className="py-4.5 px-4 text-xs text-slate-600 bg-rose-50/10">Good. Standard Excel sheets can be exported directly for CA verification, though raw file sharing is less standard than Tally.</td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>

            <div className="bg-slate-50 p-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
              <span className="text-[11px] text-slate-500 font-bold">
                💡 Unsure which software suits your business operations? Try our Smart Solution Matchmaker Wizard above.
              </span>
              <button
                onClick={() => {
                  setCallbackForm((prev) => ({
                    ...prev,
                    message: "Hi BNB Computers, I would like to schedule a detailed side-by-side comparative consultation of TallyPrime vs BUSY."
                  }));
                  const el = document.getElementById('callback-request-form-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                Schedule Side-by-Side Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INDUSTRIES WE SERVE SECTION
          ========================================================================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Industry Expertise</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Tailored Integrations for Diverse Verticals
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Every vertical handles taxations, invoicing speeds, and batch inventory differently. We have engineered specific templates for over 12 sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {industriesServed.map((industry) => (
              <div
                key={industry.id}
                className="p-5 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center space-y-3 group cursor-default"
              >
                <div className="mx-auto p-3 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center">
                  {getIcon(industry.iconName)}
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800">{industry.name}</h4>
                  <p className="text-[10px] text-slate-400 leading-normal hidden sm:block">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          IMPLEMENTATION PROCESS TIMELINE
          ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Deployment Path</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Our Structured Onboarding Flow
            </h2>
            <p className="text-xs text-slate-500">
              Five clear checkpoints mapped to guarantee clean license delivery, zero historical data leak, and high operator efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {/* Timeline connectors - Desktop */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-slate-100 z-0" />
            
            {processSteps.map((step) => (
              <div key={step.step} className="relative z-10 text-center space-y-4 group">
                <div className="mx-auto w-12 h-12 rounded-full bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white font-extrabold text-sm flex items-center justify-center shadow-inner transition-all border border-blue-100/50">
                  {step.step}
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800">{step.title}</h4>
                  <p className="text-[10px] text-slate-500 leading-relaxed max-w-[180px] mx-auto">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          EVENTS & GALLERY SECTION (CAROUSEL SHOWING 1 IMAGE AT A TIME)
          ========================================================================= */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-600">Landmark Gatherings</span>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight">
              Tax & Accounting Titans Event
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xl mx-auto">
              Moments from our exclusive seminar and interactive compliance workshop conducted for CAs, tax professionals, and enterprise leaders held in Bathinda.
            </p>
          </div>

          {/* Image Showcase Container */}
          <div className="relative bg-slate-50 border border-slate-200/60 rounded-3xl p-4 sm:p-6 shadow-sm overflow-hidden">
            <div className="relative aspect-[3/2] sm:aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-950 flex items-center justify-center">
              {/* Subtle ambient blurred background layer to fill pillarbox/letterbox seamlessly */}
              <img
                src={galleryItems[currentSlide].mediaUrl}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-25 scale-110 pointer-events-none select-none"
              />
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={galleryItems[currentSlide].mediaUrl}
                  alt={galleryItems[currentSlide].title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className="relative z-10 w-full h-full object-cover sm:object-contain select-none cursor-pointer rounded-xl transition-transform duration-300 hover:scale-[1.01]"
                  onClick={() => setLightboxItem({ url: galleryItems[currentSlide].mediaUrl, title: galleryItems[currentSlide].title, type: galleryItems[currentSlide].type })}
                />
              </AnimatePresence>

              {/* Slider overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none z-10" />

              {/* Navigation Controls - Only displayed if multiple images exist */}
              {galleryItems.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-sm transition-all duration-200 cursor-pointer border border-white/10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % galleryItems.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-sm transition-all duration-200 cursor-pointer border border-white/10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-4 right-4 z-20 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-md font-mono tracking-wider">
                    {currentSlide + 1} / {galleryItems.length}
                  </div>
                </>
              )}
            </div>

            {/* Caption and Indicators */}
            <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-teal-50 text-teal-700 rounded-md text-[9px] font-bold uppercase tracking-wider border border-teal-100">
                    {galleryItems[currentSlide].category}
                  </span>
                  <span className="text-[11px] text-slate-400 font-semibold font-mono">
                    {galleryItems[currentSlide].date}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-snug">
                  {galleryItems[currentSlide].title}
                </h4>
              </div>

              {/* Dot Indicators - Only displayed if multiple images exist */}
              {galleryItems.length > 1 && (
                <div className="flex gap-1.5 shrink-0">
                  {galleryItems.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentSlide
                          ? 'bg-teal-600 w-5'
                          : 'bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {lightboxItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm animate-fade-in">
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-w-4xl w-full max-h-[80vh] flex flex-col items-center">
              <img
                src={lightboxItem.url}
                alt={lightboxItem.title}
                className="max-w-full max-h-[70vh] rounded-xl object-contain shadow-2xl"
              />
              <p className="text-white text-sm font-bold text-center mt-4 tracking-tight">
                {lightboxItem.title}
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Testimonials removed per user request */}

      {/* =========================================================================
          FAQ SECTION (ACCORDION)
          ========================================================================= */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Got Questions?</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-slate-500">
              Clear answers regarding licensing options, cloud backups, and custom automated modules.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full px-6 py-4.5 text-left flex justify-between items-center gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="text-sm font-bold text-slate-800 tracking-tight">{faq.question}</span>
                    <span className="shrink-0 p-1 rounded-lg bg-slate-50 text-slate-400 group-hover:text-blue-600">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-xs text-slate-500 leading-relaxed border-t border-slate-50 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* =========================================================================
          INLINE REQUEST CALLBACK FORM SECTION
          ========================================================================= */}
      <section id="callback-request-form-section" className="py-20 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden border border-slate-800 relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Direct Dispatch Portal</span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                Request Quick Callback
              </h3>
              <p className="text-xs text-slate-400">
                Provide your details to formulate a priority support dispatch on WhatsApp and Email.
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleCallbackSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={callbackForm.name}
                      onChange={(e) => setCallbackForm({ ...callbackForm, name: e.target.value })}
                      placeholder="e.g., Sardar Manpreet Singh"
                      className="w-full px-4 py-2.5 text-xs text-white bg-slate-800/60 rounded-lg border border-slate-700/70 focus:outline-none focus:border-blue-500 focus:bg-slate-800 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      value={callbackForm.phone}
                      onChange={(e) => setCallbackForm({ ...callbackForm, phone: e.target.value })}
                      placeholder="e.g., 9988861199"
                      className="w-full px-4 py-2.5 text-xs text-white bg-slate-800/60 rounded-lg border border-slate-700/70 focus:outline-none focus:border-blue-500 focus:bg-slate-800 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Business Name</label>
                    <input
                      type="text"
                      value={callbackForm.businessName}
                      onChange={(e) => setCallbackForm({ ...callbackForm, businessName: e.target.value })}
                      placeholder="e.g., Bansal Enterprises"
                      className="w-full px-4 py-2.5 text-xs text-white bg-slate-800/60 rounded-lg border border-slate-700/70 focus:outline-none focus:border-blue-500 focus:bg-slate-800 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Select Software Interest</label>
                    <select
                      value={callbackForm.software}
                      onChange={(e) => setCallbackForm({ ...callbackForm, software: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs text-white bg-slate-800/60 rounded-lg border border-slate-700/70 focus:outline-none focus:border-blue-500 focus:bg-slate-800 transition-colors"
                    >
                      <option value="TallyPrime ERP License">TallyPrime ERP License</option>
                      <option value="BUSY software License">BUSY Accounting License</option>
                      <option value="Tally / BUSY Cloud Hosting">Tally/BUSY on Cloud</option>
                      <option value="WhatsApp / SMS Automation">WhatsApp CRM Addons</option>
                      <option value="Custom TDL Development">Custom TDL / DB Extension</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Requirements Brief</label>
                  <textarea
                    rows={2}
                    value={callbackForm.message}
                    onChange={(e) => setCallbackForm({ ...callbackForm, message: e.target.value })}
                    placeholder="Need local pricing, multi-user upgrade, historical data split..."
                    className="w-full px-4 py-2.5 text-xs text-white bg-slate-800/60 rounded-lg border border-slate-700/70 focus:outline-none focus:border-blue-500 focus:bg-slate-800 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  <span>Generate Callback Request</span>
                </button>
              </form>
            ) : (
              <div className="py-6 text-center space-y-5 bg-slate-800/20 p-6 rounded-2xl border border-slate-700/50">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 mb-1">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight">Callback Request Prepared!</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{callbackForm.name}</strong>. Your callback details are ready. Please select your preferred method below to dispatch your message to <strong className="text-teal-300">{companyDetails.email}</strong>:
                </p>

                <div className="flex flex-col sm:flex-row gap-2.5 justify-center max-w-md mx-auto pt-2">
                  <button
                    onClick={handleEmailAction}
                    className="flex-1 py-3 px-4 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email</span>
                  </button>

                  <a
                    href={`https://wa.me/91${companyDetails.rawMobile1}?text=${encodeURIComponent(
                      `*New Callback Request - BNB COMPUTERS website*\n\n` +
                      `👤 *Name:* ${callbackForm.name}\n` +
                      `📞 *Phone:* ${callbackForm.phone}\n` +
                      `🏢 *Business:* ${callbackForm.businessName || 'N/A'}\n` +
                      `💻 *Interest:* ${callbackForm.software}\n` +
                      `📝 *Message:* ${callbackForm.message || 'Please call me back.'}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Send on WhatsApp</span>
                  </a>
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => {
                      setCallbackForm({
                        name: '',
                        phone: '',
                        email: '',
                        businessName: '',
                        software: 'TallyPrime ERP License',
                        message: ''
                      });
                      setIsSubmitted(false);
                    }}
                    className="text-[11px] font-bold text-slate-400 hover:text-slate-200 underline transition-colors cursor-pointer"
                  >
                    Request Another Callback
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
