import React, { useState } from 'react';
import { MessageCircle, PhoneCall, X, Send, ShieldCheck, AlertCircle, Mail } from 'lucide-react';
import { companyDetails } from '../data/companyData';

export default function FloatingWidgets() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    software: 'TallyPrime',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      businessName: '',
      software: 'TallyPrime',
      message: ''
    });
  };

  // WhatsApp click handler
  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello BNB COMPUTERS, I visited your website and would like to inquire about Tally/BUSY solutions.`
    );
    window.open(`https://wa.me/91${companyDetails.rawMobile1}?text=${text}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openEmailClient = (details: typeof formData) => {
    const emailSubject = `BNB Callback Request: ${details.businessName || details.name}`;
    const emailBody = `Respected BNB COMPUTERS Team,\n\n` +
      `I am submitting a callback request via the quick floating widget. Here are my details:\n\n` +
      `• Name: ${details.name}\n` +
      `• Mobile / Phone: ${details.phone}\n` +
      `• Email: ${details.email || 'Not Provided'}\n` +
      `• Business / Firm Name: ${details.businessName || 'Not Provided'}\n` +
      `• Software / Solution: ${details.software || 'TallyPrime'}\n` +
      `• Message: ${details.message || 'Please contact me for a callback.'}\n\n` +
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your Name and Phone Number.");
      return;
    }

    setIsSubmitted(true);
  };

  const handleEmailAction = () => {
    openEmailClient(formData);
  };

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* WhatsApp Button */}
        <button
          onClick={handleDirectWhatsApp}
          id="floating-whatsapp-btn"
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white shadow-lg hover:shadow-emerald-200 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer animate-bounce"
          style={{ animationDuration: '3s' }}
        >
          <MessageCircle className="w-6 h-6 fill-current" />
        </button>

        {/* Request Callback Trigger */}
        <button
          onClick={() => setIsOpen(true)}
          id="floating-callback-btn"
          aria-label="Request Callback"
          className="flex items-center gap-2 px-4 h-12 rounded-full bg-blue-600 text-white shadow-lg hover:shadow-blue-200 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <PhoneCall className="w-5 h-5 animate-pulse" />
          <span className="text-sm font-semibold tracking-wide hidden md:inline">Request Callback</span>
        </button>
      </div>

      {/* Slide-out Callback Request Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in">
          <div
            id="callback-modal-card"
            className="relative w-full max-w-md overflow-hidden bg-white rounded-2xl shadow-2xl border border-slate-100 transform transition-all animate-scale-up"
          >
            {/* Modal Header */}
            <div className="relative px-6 py-5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/15 text-white/90 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 mb-1">
                <PhoneCall className="w-5 h-5 text-blue-200" />
                <h3 className="text-lg font-bold tracking-tight">Request an Expert Callback</h3>
              </div>
              <p className="text-xs text-blue-100">
                Authorized TallyPrime & BUSY solutions specialists will contact you.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., Sardar Manpreet Singh"
                      className="w-full px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g., 9988861199"
                        className="w-full px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g., business@gmail.com"
                        className="w-full px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                        Business Name
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g., Bansal Enterprises"
                        className="w-full px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                        Software Required
                      </label>
                      <select
                        name="software"
                        value={formData.software}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                      >
                        <option value="TallyPrime">TallyPrime ERP</option>
                        <option value="BUSY Accounting">BUSY Accounting</option>
                        <option value="Tally / BUSY on Cloud">Tally/BUSY on Cloud</option>
                        <option value="WhatsApp Integration">WhatsApp API</option>
                        <option value="Custom TDL Development">Custom ERP TDL</option>
                        <option value="AMC / Support Contract">AMC / Support</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                      Brief Message / Requirements
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your requirement (e.g. need remote training, AMC quotes, multi-user upgrade)..."
                      className="w-full px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Your data is confidential & secured under Indian IT laws.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-md shadow-blue-200 active:scale-98 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Callback Request</span>
                  </button>
                </form>
              ) : (
                <div className="py-4 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 mb-1">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <h4 className="text-base font-black text-slate-900 tracking-tight">Select How To Send Request</h4>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-800">{formData.name}</strong>. Please choose whether you would like to send your inquiry via Email or WhatsApp:
                  </p>
                  
                  <div className="space-y-2 pt-1 max-w-sm mx-auto">
                    {/* Primary Email Button */}
                    <button
                      onClick={handleEmailAction}
                      className="w-full py-2.5 px-4 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-colors cursor-pointer"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send via Email</span>
                    </button>

                    {/* Primary WhatsApp Button */}
                    <a
                      href={`https://wa.me/91${companyDetails.rawMobile1}?text=${encodeURIComponent(
                        `*New Callback Request - BNB COMPUTERS website*\n\n` +
                        `👤 *Name:* ${formData.name}\n` +
                        `📞 *Phone:* ${formData.phone}\n` +
                        `📧 *Email:* ${formData.email || 'N/A'}\n` +
                        `🏢 *Business:* ${formData.businessName || 'N/A'}\n` +
                        `💻 *Software/Solution:* ${formData.software}\n` +
                        `📝 *Message:* ${formData.message || 'I am interested in a callback.'}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Send on WhatsApp</span>
                    </a>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-[10px] text-left text-slate-500 leading-normal">
                    <p className="font-bold text-slate-700 mb-0.5">💡 Expert Support Desk SLA:</p>
                    <p>Our certified technicians in Bathinda, Punjab, will contact you within 1-2 hours of receiving your dispatch.</p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleClose}
                      className="text-xs font-bold text-slate-400 hover:text-slate-600 underline transition-colors cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
