import React, { useState } from 'react';
import {
  FileText,
  Clock,
  Database,
  Zap,
  Cloud,
  MessageCircle,
  Layers,
  Shield,
  Wrench,
  GraduationCap,
  Terminal,
  TrendingUp,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import SEO from '../components/SEO';
import { companyDetails, servicesList } from '../data/companyData';

export default function Services() {
  const [filter, setFilter] = useState<'all' | 'license' | 'cloud' | 'custom' | 'support'>('all');

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
      case 'Terminal': return <Terminal className="w-6 h-6 text-blue-600" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-blue-600" />;
      default: return <FileText className="w-6 h-6 text-blue-600" />;
    }
  };

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'license', name: 'Licensing & Renewals' },
    { id: 'cloud', name: 'Cloud Hosting' },
    { id: 'custom', name: 'Customization & Automation' },
    { id: 'support', name: 'Support & AMCs' }
  ];

  const filteredServices = servicesList.filter((service) => {
    if (filter === 'all') return true;
    if (filter === 'license') {
      return service.id.includes('license') || service.id.includes('renewal');
    }
    if (filter === 'cloud') {
      return service.id.includes('cloud');
    }
    if (filter === 'custom') {
      return service.id.includes('custom') || service.id.includes('whatsapp') || service.id.includes('automation');
    }
    if (filter === 'support') {
      return service.id.includes('support') || service.id.includes('training') || service.id.includes('migration');
    }
    return true;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="Our Services - Tally Prime & BUSY Integrations Punjab"
        description="Explore the complete list of authorized accounting services offered by BNB Computers. Setup new licenses, cloud servers, WhatsApp extensions, and AMCs."
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-4">
          <span className="px-3 py-1 bg-blue-500/25 border border-blue-400/25 text-blue-200 text-xs font-bold uppercase tracking-wider rounded-full">
            Our Offerings
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Comprehensive Accounting Software Services
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Authorized installations, renewals, cloud ERP hosting, automated integrations, custom reports, and certified offline and remote troubleshooting.
          </p>
        </div>
      </section>

      {/* Categories filter and Service Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Category Selector pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-150'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-blue-50/50 group-hover:bg-blue-50 rounded-xl transition-all">
                    {getIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 rounded-md">
                      {service.badge}
                    </span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">{service.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{service.description}</p>
                </div>
              </div>

              {/* Deliverable bullets inside card */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Included Features:</p>
                <ul className="space-y-1.5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-tight">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Direct Action trigger */}
                <button
                  onClick={() => {
                    const callbackBtn = document.getElementById('floating-callback-btn');
                    if (callbackBtn) callbackBtn.click();
                  }}
                  className="w-full mt-4 py-2 bg-slate-50 hover:bg-blue-50 group-hover:bg-blue-600 text-slate-700 group-hover:text-white font-bold text-xs rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-slate-100 group-hover:border-blue-600"
                >
                  <span>Inquire for {service.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Technology Partners Trust Section */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Our Trusted Engineering Affiliations</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-80">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-base font-black text-slate-800 tracking-tight">Tally Solutions</span>
              <span className="px-2 py-0.5 text-[9px] font-bold uppercase bg-emerald-50 text-emerald-600 rounded">Authorized Partner</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span className="text-base font-black text-slate-800 tracking-tight">BUSY Infotech Pvt. Ltd.</span>
              <span className="px-2 py-0.5 text-[9px] font-bold uppercase bg-blue-50 text-blue-600 rounded">Certified Partner</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
