import React from 'react';
import { Check, X, ShieldAlert, BadgeInfo, HelpCircle, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { productsList } from '../data/companyData';

export default function Products() {
  const comparisonMatrix = [
    { feature: "Primary Core Strength", tally: "Sleek final bookkeeping & flexible navigation", busy: "Robust item details, barcodes & parameter grids" },
    { feature: "Statutory GST / TDS / TCS", tally: "Inbuilt automated direct portals dispatch", busy: "Highly detailed customizable templates & exports" },
    { feature: "Inventory Batch & Expiry", tally: "Standard batch, serial & godown configurations", busy: "Advanced parameter-wise serials, matrices & packaging" },
    { feature: "Manufacturing & BOM", tally: "Standard consumption bills & material sheets", busy: "Advanced multi-tier pricing sheets, costing & consumption" },
    { feature: "Point of Sale (POS) Billing", tally: "Standard accounting voucher templates", busy: "Inbuilt customizable touchscreen panels & barcode prints" },
    { feature: "Customization Flexibility", tally: "Highly flexible TDL languages adjustments", busy: "Standard fields, templates, configurations & API hooks" },
    { feature: "Database Architecture", tally: "Secure, optimized proprietary file system", busy: "Stable MS-Access or enterprise-grade SQL Server" },
    { feature: "Standard Licensing Base", tally: "Silver (Single User) or Gold (Unlimited LAN)", busy: "Basic, Standard, or Enterprise levels" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="Our Products - Authorized TallyPrime & BUSY Software"
        description="Review detailed specifications and comparisons for TallyPrime ERP, BUSY Accounting Software, and Cloud ERP Hosting provided by BNB Computers."
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-4">
          <span className="px-3 py-1 bg-blue-500/25 border border-blue-400/25 text-blue-200 text-xs font-bold uppercase tracking-wider rounded-full">
            Product Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Premium Accounting ERP Suites
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Authorized procurement, instant licensing keys delivery, automated cloud migrations, and deep feature setups custom-tailored to your company's transactions.
          </p>
        </div>
      </section>

      {/* Main Products List cards */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 space-y-24">
        {productsList.map((product, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={product.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image Panel */}
              <div className={`lg:col-span-5 relative ${isEven ? '' : 'lg:order-2'}`}>
                <div className="overflow-hidden rounded-2xl shadow-xl border border-slate-100 bg-white">
                  <img
                    src={product.imagePlaceholder}
                    alt={product.title}
                    className="w-full h-80 object-cover hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-wider rounded-lg shadow-md">
                    {product.badge || 'Official System'}
                  </span>
                </div>
              </div>

              {/* Text specifications panel */}
              <div className={`lg:col-span-7 space-y-6 ${isEven ? '' : 'lg:order-1'}`}>
                <div className="space-y-1.5">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{product.title}</h2>
                  <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">{product.subtitle}</p>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">{product.description}</p>

                {/* Benefits checklist */}
                <div className="space-y-3">
                  <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">Major Operational Benefits:</p>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex gap-2.5 items-start">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-normal">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features bento details */}
                <div className="space-y-3">
                  <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">Features Checklist:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        <span className="font-medium text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom transactional action panel */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Base Investment:</p>
                    <p className="text-sm font-black text-slate-800">{product.pricingRange}</p>
                  </div>
                  <button
                    onClick={() => {
                      const callbackBtn = document.getElementById('floating-callback-btn');
                      if (callbackBtn) callbackBtn.click();
                    }}
                    className="w-full sm:w-auto px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg transition-transform hover:scale-102 active:scale-98 cursor-pointer shadow-md"
                  >
                    Request Demo & Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* =========================================================================
          COMPARISON MATRIX SECTION
          ========================================================================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Decision Helper</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              TallyPrime vs. BUSY Accounting Matrix
            </h2>
            <p className="text-xs text-slate-500">
              Evaluate which system fits your operational workflows. Our experts support both systems with certified local assistance in Bathinda.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200/60 bg-white shadow-sm">
            <table className="w-full min-w-[700px] text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-900 text-white font-semibold">
                  <th className="p-4 uppercase tracking-wider text-[10px]">Evaluation Category</th>
                  <th className="p-4 uppercase tracking-wider text-[10px]">TallyPrime ERP</th>
                  <th className="p-4 uppercase tracking-wider text-[10px]">BUSY Accounting Software</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900 max-w-[180px] leading-relaxed">{row.feature}</td>
                    <td className="p-4 text-slate-600 leading-relaxed">{row.tally}</td>
                    <td className="p-4 text-slate-600 leading-relaxed">{row.busy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100/30 text-xs text-slate-600 flex items-start gap-3 mt-6">
            <BadgeInfo className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Need a customized integration estimate?</strong> Our technicians can run localized diagnostics on your billing volume and propose tailored configurations combining both. Contact our Bathinda team directly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
