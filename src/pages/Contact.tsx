import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { companyDetails } from '../data/companyData';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const openEmailClient = (details: { name: string; phone: string; businessName?: string; email?: string; message?: string }) => {
    const emailSubject = `BNB Website Contact Inquiry: ${details.businessName || details.name}`;
    const emailBody = `Respected BNB COMPUTERS Team,\n\n` +
      `I am submitting an inquiry from your Contact page. Here are my details:\n\n` +
      `• Name: ${details.name}\n` +
      `• Mobile / Phone: ${details.phone}\n` +
      `• Email: ${details.email || 'Not Provided'}\n` +
      `• Business / Firm Name: ${details.businessName || 'Not Provided'}\n` +
      `• Message / Requirement: ${details.message || 'I would like to request information and a callback.'}\n\n` +
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

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setIsSubmitted(true);
  };

  const handleEmailAction = () => {
    openEmailClient(form);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="Contact Us - Authorized Tally & BUSY Office Bathinda"
        description="Find our physical office in Bathinda, Punjab, dial our customer care phone numbers, review operating hours, and submit business enquiries."
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-4">
          <span className="px-3 py-1 bg-blue-500/25 border border-blue-400/25 text-blue-200 text-xs font-bold uppercase tracking-wider rounded-full">
            Reach Us
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Connect With BNB COMPUTERS
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Visit our regional operations headquarters, connect on corporate channels, or submit an automated callback dispatch.
          </p>
        </div>
      </section>

      {/* Contact Details, Form and Map */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left panel contact information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">Offices Channels</h2>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Our Physical Location & Contact Channels</h3>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Headquarters Address</h4>
                  <p className="text-xs text-slate-800 leading-relaxed font-semibold">{companyDetails.officeAddress}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Mobile Support Hotlines</h4>
                  <div className="flex flex-col text-xs font-semibold text-slate-800">
                    <a href={`tel:${companyDetails.rawMobile1}`} className="hover:text-blue-600 transition-colors">
                      {companyDetails.primaryMobile}
                    </a>
                    <a href={`tel:${companyDetails.rawMobile2}`} className="hover:text-blue-600 transition-colors">
                      {companyDetails.secondaryMobile}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Corporate Email</h4>
                  <a href={`mailto:${companyDetails.email}`} className="text-xs font-semibold text-slate-800 hover:text-blue-600 transition-colors break-all">
                    {companyDetails.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Office Working Hours</h4>
                  <p className="text-xs text-slate-800 font-semibold leading-relaxed">{companyDetails.workingHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel enquiry form */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">Submit Business Enquiry</h3>
              <p className="text-xs text-slate-500">
                Complete the fields. Our specialists in Bathinda will analyze and respond promptly.
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g., Sardar Manpreet Singh"
                      className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="e.g., 9988861199"
                      className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g., mail@gmail.com"
                      className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Business Name</label>
                    <input
                      type="text"
                      value={form.businessName}
                      onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                      placeholder="e.g., Bansal Outlets"
                      className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Requirements Brief</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Need local pricing, multi-user upgrade, Tally customized invoice, or training parameters..."
                    className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center gap-2 text-[10px] text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Your submission is formulated into direct WhatsApp & Email dispatches.</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Generate Dispatch</span>
                </button>
              </form>
            ) : (
              <div className="py-6 text-center space-y-5 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 mb-1">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 tracking-tight">Inquiry Prepared!</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-800">{form.name}</strong>. Your inquiry details are ready. Please select your preferred channel below to send your message to <strong className="text-blue-600">{companyDetails.email}</strong>:
                </p>

                <div className="flex flex-col sm:flex-row gap-2.5 justify-center max-w-md mx-auto pt-2">
                  <button
                    onClick={handleEmailAction}
                    className="flex-1 py-3 px-4 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all duration-200 cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email</span>
                  </button>

                  <a
                    href={`https://wa.me/91${companyDetails.rawMobile1}?text=${encodeURIComponent(
                      `*New Business Inquiry - BNB COMPUTERS website*\n\n` +
                      `👤 *Name:* ${form.name}\n` +
                      `📞 *Phone:* ${form.phone}\n` +
                      `📧 *Email:* ${form.email || 'N/A'}\n` +
                      `🏢 *Business:* ${form.businessName || 'N/A'}\n` +
                      `📝 *Message:* ${form.message || 'I am interested in a callback.'}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all duration-200 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Send on WhatsApp</span>
                  </a>
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => {
                      setForm({
                        name: '',
                        phone: '',
                        email: '',
                        businessName: '',
                        message: ''
                      });
                      setIsSubmitted(false);
                    }}
                    className="text-[11px] font-bold text-slate-400 hover:text-slate-600 underline transition-colors cursor-pointer"
                  >
                    Fill Form Again
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Embedded High-Quality Google Map Section */}
      <section className="bg-slate-100 h-[400px] border-t border-slate-200">
        <iframe
          src={companyDetails.googleMapsEmbedUrl}
          className="w-full h-full border-0 select-none grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
          allowFullScreen={false}
          loading="lazy"
          title="BNB COMPUTERS Office Location in Bathinda, Punjab"
        />
      </section>
    </div>
  );
}
