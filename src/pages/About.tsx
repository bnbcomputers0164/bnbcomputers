import React from 'react';
import { Award, Shield, Users, Compass, HelpCircle, PhoneCall, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { companyDetails, statistics } from '../data/companyData';
// @ts-ignore
import vikasImg from '../assets/images/vikas_kumar_goyal_1784643222603.jpg';

export default function About() {
  const values = [
    {
      title: "Regulatory Compliance First",
      desc: "We ensure all database structures adhere perfectly to the guidelines set by the Government of India, GST Council, and IT standards.",
      icon: Shield
    },
    {
      title: "Zero-Downtime Commitment",
      desc: "Accounting blockages stop billing. We maintain immediate, low-latency remote helpdesks to keep your invoice generation online.",
      icon: Users
    },
    {
      title: "Craftsmanship & Tailoring",
      desc: "No standard templates if your business needs custom invoice shapes. We master Tally TDL codes and SQL servers configurations.",
      icon: Award
    },
    {
      title: "Client-Centric Integrity",
      desc: "We consult honestly. If a basic license fits your transaction size, we will never advise expensive cloud servers.",
      icon: Compass
    }
  ];

  const teamMembers = [
    {
      name: "Vikas Kumar Goyal",
      role: "Proprietor",
      bio: "Proprietor of BNB Computers. Over 15 years of expertise in IT systems consulting, commercial software planning, Tally ERP, and BUSY systems across North India.",
      img: vikasImg
    },
    {
      name: "Navpreet Singh",
      role: "Senior Technical Expert",
      bio: "Certified Tally Customization Specialist & Cloud Systems Lead. Architected over 500 TDL custom implementations.",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Preetpal Singh",
      role: "Technical Expert",
      bio: "Master of BUSY Accounting MS-SQL architectures, data migrations, and multi-year data splits.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Asma",
      role: "Telecaller",
      bio: "Manages support ticketing SLAs, customer feedback loops, and statutory compliance onboarding programs.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="About Us - Certified Accounting Software Partners"
        description="Learn about BNB COMPUTERS, Bathinda's leading provider for TallyPrime ERP and BUSY systems. Read our mission, timeline, and meet our certified technicians."
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-4">
          <span className="px-3 py-1 bg-blue-500/25 border border-blue-400/25 text-blue-200 text-xs font-bold uppercase tracking-wider rounded-full">
            Our Identity
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Who is BNB COMPUTERS?
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Providing reliable accounting software integrations, statutory compliance, and cloud hosting for businesses in Bathinda, Punjab since 2014.
          </p>
        </div>
      </section>

      {/* Core Journey and Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">Established in 2014</h2>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Our Decade of Engineering Operational Excellence
              </h3>
              <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
                <p>
                  BNB Computers started with a simple vision: to empower small and mid-sized enterprises across Punjab to migrate from error-prone manual ledger registers to modern, digital, and tax-compliant software.
                </p>
                <p>
                  As regional markets adapted to the goods and services tax (GST) framework in 2017, BNB Computers served as a crucial support hub. We trained operators, updated billing templates, and ensured compliance for thousands of wholesale traders and manufacturing units.
                </p>
                <p>
                  Today, we are authorized development partners with an expansive reach in North India. We support diverse business structures with advanced cloud databases, direct bank reconciliations, custom ERP wrappers, and automated outstanding notices.
                </p>
              </div>

              {/* Mini Stats block */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                <div>
                  <p className="text-xl font-extrabold text-blue-600">2014</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Year Founded</p>
                </div>
                <div>
                  <p className="text-xl font-extrabold text-blue-600">2000+</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Happy Clients</p>
                </div>
                <div>
                  <p className="text-xl font-extrabold text-blue-600">100%</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">SLA Resolved</p>
                </div>
              </div>
            </div>

            {/* Right Graphics Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-xl shadow-md border border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80"
                    alt="Active business training"
                    className="w-full h-44 object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100/30 text-center space-y-1">
                  <p className="text-lg font-black text-blue-950">2000+</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Satisfied Customers</p>
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="p-4 bg-emerald-50/30 rounded-xl border border-emerald-100/30 text-center space-y-1">
                  <p className="text-lg font-black text-emerald-950">15+</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Product Solutions</p>
                </div>
                <div className="overflow-hidden rounded-xl shadow-md border border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=400&q=80"
                    alt="Accounting software setup"
                    className="w-full h-44 object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Company Values */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Company Tenets</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Values That Drive BNB COMPUTERS
            </h2>
            <p className="text-xs text-slate-500">
              Our engineering code and customer relationships are structured around four absolute principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 space-y-4">
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl w-fit">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-bold text-slate-900 tracking-tight">{val.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expert Team Members Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Our Experts</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Meet Our Certified Technicians
            </h2>
            <p className="text-xs text-slate-500">
              Our professionals hold direct certifications from Tally Solutions and BUSY Infotech to guarantee flawless execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="group flex flex-col items-center text-center space-y-4">
                <div className="relative w-40 h-40 overflow-hidden rounded-2xl shadow-md border border-slate-100">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-all" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">{member.name}</h4>
                  <p className="text-xs text-blue-600 font-semibold">{member.role}</p>
                  <p className="text-[11px] text-slate-400 max-w-[220px] mx-auto leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
            Ready to Streamline Your Business Accounting?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Consult with our founders. We will map your inventory flow, suggest software licenses, and provide complete local price estimates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => {
                const callbackBtn = document.getElementById('floating-callback-btn');
                if (callbackBtn) callbackBtn.click();
              }}
              className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-lg transition-transform hover:scale-103 active:scale-97 cursor-pointer"
            >
              Request Call Back
            </button>
            <a
              href={`mailto:${companyDetails.email}`}
              className="w-full sm:w-auto px-6 py-2.5 bg-white/10 hover:bg-white/15 text-white font-bold text-xs rounded-xl border border-white/10 transition-colors"
            >
              Send an Email Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
