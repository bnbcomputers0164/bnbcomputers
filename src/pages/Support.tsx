import React, { useState } from 'react';
import {
  Download,
  LifeBuoy,
  MessageSquare,
  Wrench,
  Video,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Clock,
  Send,
  X,
  Play
} from 'lucide-react';
import SEO from '../components/SEO';
import { supportDownloads } from '../data/companyData';

export default function Support() {
  const [ticketForm, setTicketForm] = useState({
    name: '',
    phone: '',
    software: 'TallyPrime',
    severity: 'Medium',
    description: ''
  });
  const [ticketNumber, setTicketNumber] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<{ title: string; url: string } | null>(null);

  const supportCategories = [
    { title: "Licensing & Activation Help", desc: "Issues with genuine activation, transfer of keys, or TSS renewals checks.", icon: LifeBuoy },
    { title: "Remote Technical Assistance", desc: "Direct troubleshooting via secure AnyDesk or TeamViewer connections.", icon: Wrench },
    { title: "Custom Module Crashes", desc: "Troubleshoot invoice designs, TDL failures, or database synch logs.", icon: MessageSquare },
    { title: "Statutory GST Updates", desc: "Configure e-invoicing nodes, e-way bill portals or HSN updates.", icon: AlertTriangle }
  ];

  const trainingVideos = [
    { id: "vid-1", title: "TallyPrime 5.0 - Automatic E-Invoicing Generation Tutorial", duration: "12 mins", thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80" },
    { id: "vid-2", title: "BUSY Software - Standard Barcode Designing & Printing Guides", duration: "18 mins", thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80" },
    { id: "vid-3", title: "Connecting Tally and BUSY to BNB Cloud Server (RDP Access)", duration: "8 mins", thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=400&q=80" }
  ];

  const handleRaiseTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketForm.name || !ticketForm.phone) return;

    // Generate random Ticket ID
    const randomId = 'BNB-TKT-' + Math.floor(100000 + Math.random() * 900000);
    setTicketNumber(randomId);
  };

  const handleCloseTicketModal = () => {
    setTicketNumber(null);
    setTicketForm({
      name: '',
      phone: '',
      software: 'TallyPrime',
      severity: 'Medium',
      description: ''
    });
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="Support Center - Remote Helpdesk & Downloads"
        description="Raise a technical ticket, download genuine Tally and BUSY software setups, remote control tools (AnyDesk/TeamViewer), and watch tutorial videos."
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-4">
          <span className="px-3 py-1 bg-blue-500/25 border border-blue-400/25 text-blue-200 text-xs font-bold uppercase tracking-wider rounded-full">
            Service Desk
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            BNB Customer Support Center
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Get instant help for statutory tax issues, license activations, database recovery, and download authorized product installations.
          </p>
        </div>
      </section>

      {/* Support Categories grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={idx} className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 space-y-4">
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl w-fit">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">{cat.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Raised Ticket Form & Downloads side-by-side */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Raise Support Ticket Form Panel */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6">
            <div className="space-y-1.5">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">Raise a Technical Support Ticket</h3>
              <p className="text-xs text-slate-500">
                Submit your query. A certified support desk technician in Bathinda will call you back.
              </p>
            </div>

            <form onSubmit={handleRaiseTicket} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={ticketForm.name}
                    onChange={(e) => setTicketForm({ ...ticketForm, name: e.target.value })}
                    placeholder="e.g., Sardari Lal"
                    className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Contact Phone *</label>
                  <input
                    type="tel"
                    required
                    value={ticketForm.phone}
                    onChange={(e) => setTicketForm({ ...ticketForm, phone: e.target.value })}
                    placeholder="e.g., 9988861199"
                    className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Select Software Platform</label>
                  <select
                    value={ticketForm.software}
                    onChange={(e) => setTicketForm({ ...ticketForm, software: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                  >
                    <option value="TallyPrime">TallyPrime ERP</option>
                    <option value="BUSY Accounting">BUSY Accounting</option>
                    <option value="Cloud ERP Server">Cloud ERP Server</option>
                    <option value="WhatsApp/SMS Addons">WhatsApp Invoicing Modules</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Impact Severity</label>
                  <select
                    value={ticketForm.severity}
                    onChange={(e) => setTicketForm({ ...ticketForm, severity: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                  >
                    <option value="Low">Low - General Question</option>
                    <option value="Medium">Medium - Feature Blocked</option>
                    <option value="High">High - Server Down / Billing Stopped</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Description of Issue *</label>
                <textarea
                  required
                  rows={3}
                  value={ticketForm.description}
                  onChange={(e) => setTicketForm({ ...ticketForm, description: e.target.value })}
                  placeholder="Describe your technical issue (e.g. printer error, data backup corrupt, unable to fetch license TSS)..."
                  className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Technical Ticket</span>
              </button>
            </form>
          </div>

          {/* Support Downloads List Panel */}
          <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6">
            <div className="space-y-1.5">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">Official Utility Downloads</h3>
              <p className="text-xs text-slate-500 font-medium">
                Procure authorized files from secure developer streams.
              </p>
            </div>

            <div className="divide-y divide-slate-100 max-h-[380px] overflow-y-auto pr-2">
              {supportDownloads.map((dl, idx) => (
                <div key={idx} className="py-3 flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-slate-800 tracking-tight">{dl.name}</p>
                    <p className="text-[10px] text-slate-400">{dl.version} · {dl.size}</p>
                  </div>
                  <a
                    href={dl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition-colors cursor-pointer shrink-0"
                    aria-label={`Download ${dl.name}`}
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>

            <div className="p-3 bg-amber-50 rounded-lg border border-amber-100 text-[10px] text-amber-800 leading-relaxed flex items-start gap-2">
              <Clock className="w-4 h-4 shrink-0 mt-0.5" />
              <span>
                <strong>TSS Subscription Alert:</strong> Direct online upgrades require an active Tally Software Services package. Check your license check status before running setups.
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Video Training Onboarding Guides */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Video Tutorials</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Certified User Training Guides
          </h2>
          <p className="text-xs text-slate-500">
            Quick, on-demand reference videos on e-invoicing parameters, direct barcode layouts, and cloud configurations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trainingVideos.map((vid) => (
            <div
              key={vid.id}
              onClick={() => setActiveVideo({ title: vid.title, url: 'https://www.youtube.com' })}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden group cursor-pointer"
            >
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-all flex items-center justify-center">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white">
                    <Play className="w-5 h-5 fill-current" />
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-1">
                <p className="text-[10px] text-blue-600 font-bold uppercase">Tutorial · {vid.duration}</p>
                <h4 className="text-xs font-bold text-slate-800 line-clamp-2 leading-snug">{vid.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Raised Ticket Confirmation Overlay */}
      {ticketNumber && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 text-center space-y-4 border border-slate-100 animate-scale-up">
            <div className="mx-auto p-3 bg-emerald-50 text-emerald-600 rounded-full w-fit">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Support Ticket Raised!</h3>
            
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
              <p className="text-[10px] uppercase font-bold text-slate-400">Your Official Ticket ID:</p>
              <p className="text-xl font-mono font-black text-blue-600 tracking-wider">{ticketNumber}</p>
            </div>

            <div className="text-xs text-slate-500 space-y-1.5 max-w-sm mx-auto text-left leading-relaxed">
              <p className="font-bold text-slate-800">What happens now?</p>
              <p>1. Our technical dispatcher in Bathinda has logged this inquiry.</p>
              <p>2. Based on your severity choice, we will contact you on your registered number <strong className="text-slate-700">{ticketForm.phone}</strong>.</p>
              <p>3. If your billing terminal is down (High severity), a remote connection will be initiated within 15 minutes.</p>
            </div>

            <button
              onClick={handleCloseTicketModal}
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer shadow-md"
            >
              Acknowledged
            </button>
          </div>
        </div>
      )}

      {/* Active Video Player Mockup Overlay */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm animate-fade-in">
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close Video Player"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-slate-100 p-4 space-y-4">
            <div className="aspect-video bg-slate-900 rounded-xl flex items-center justify-center">
              <p className="text-white text-xs text-center p-6 space-y-1">
                <span className="block text-sm font-bold">Simulated Stream Session</span>
                <span className="block text-slate-400">Loading authorized training catalog for: {activeVideo.title}</span>
              </p>
            </div>
            <h4 className="text-xs font-bold text-slate-800">{activeVideo.title}</h4>
            <div className="flex justify-between items-center text-[10px] text-slate-400">
              <span>Verified Video File</span>
              <span>BNB Computers Training Desk</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
