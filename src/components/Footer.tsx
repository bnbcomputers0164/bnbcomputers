import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, MessageCircle, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import BNBLogo from './BNBLogo';
import { companyDetails, servicesList, productsList } from '../data/companyData';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setIsSubscribed(false);
    }, 4000);
  };

  const seoKeywords = [
    "Tally Partner Bathinda", "Busy Partner Bathinda", "Tally Software Bathinda",
    "Busy Software Bathinda", "Accounting Software Punjab", "GST Software Bathinda",
    "Tally Customization Punjab", "Tally on Cloud India", "BUSY on Cloud Punjab",
    "WhatsApp TDL Integration", "Data Migration Tally", "BUSY ERP Partner"
  ];

  return (
    <footer className="relative bg-slate-900 text-slate-400 pt-16 pb-8 overflow-hidden border-t border-slate-800">
      {/* Decorative ambient background lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-14 pb-12 border-b border-slate-800">
          
          {/* Company Brief Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <BNBLogo size="sm" showTagline={true} lightMode={true} />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              Empowering business operations through trusted, authorized accounting systems, flawless GST configurations, and ultra-secure cloud hosting infrastructure in North India.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-white">Authorized Partner:</span>
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 rounded border border-emerald-500/20">TallyPrime</span>
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 rounded border border-blue-500/20">BUSY ERP</span>
            </div>
          </div>

          {/* Core Products Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Our Solutions</h4>
            <ul className="space-y-2.5 text-xs">
              {productsList.map((product) => (
                <li key={product.id}>
                  <Link
                    to="/products"
                    className="hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{product.title}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Tally Customization (TDL)</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>WhatsApp Invoicing API</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contact Info</h4>
            <ul className="space-y-3.5 text-xs">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-300">
                  {companyDetails.officeAddress}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${companyDetails.rawMobile1}`} className="hover:text-white font-medium transition-colors">
                    {companyDetails.primaryMobile}
                  </a>
                  <a href={`tel:${companyDetails.rawMobile2}`} className="hover:text-white font-medium transition-colors">
                    {companyDetails.secondaryMobile}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href={`mailto:${companyDetails.email}`} className="hover:text-white transition-colors break-all">
                  {companyDetails.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Newsletter</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Stay updated with the latest GST rules, compliance updates, and software patch releases.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="w-full px-3.5 py-2.5 text-xs text-white placeholder-slate-500 bg-slate-800 rounded-lg border border-slate-700 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {isSubscribed && (
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold animate-pulse">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subscribed! Check your inbox for updates.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Local SEO Keywords Tag Cluster - High Value Local Presence */}
        <div className="py-6 border-b border-slate-800 text-[10px] text-slate-500">
          <p className="font-bold uppercase text-slate-400 tracking-wider mb-2.5">Regional Keyword Target Area:</p>
          <div className="flex flex-wrap gap-2">
            {seoKeywords.map((keyword, idx) => (
              <span key={idx} className="px-2 py-0.5 bg-slate-800/40 rounded hover:text-slate-300 transition-colors">
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            <p>© {new Date().getFullYear()} BNB COMPUTERS. All rights reserved.</p>
            <p className="text-[10px] mt-0.5 text-slate-600">
              Developed & authorized for Tally Solutions & BUSY Infotech. All trademarks property of respective owners.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-6 font-semibold">
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
