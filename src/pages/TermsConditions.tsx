import React from 'react';
import SEO from '../components/SEO';
import { companyDetails } from '../data/companyData';

export default function TermsConditions() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-20">
      <SEO
        title="Terms & Conditions - Operational Guidelines"
        description="Review the business operational terms and guidelines of BNB COMPUTERS, including licensing scopes, support SLAs, and AMC durations in Punjab, India."
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 space-y-6">
        <div className="space-y-1 pb-6 border-b border-slate-100">
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Operations Guidelines</span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Terms & Conditions</h1>
          <p className="text-xs text-slate-400">Last updated: July 20, 2026</p>
        </div>

        <div className="text-slate-600 text-xs sm:text-sm leading-relaxed space-y-5">
          <p>
            Welcome to the corporate portal of <strong>BNB COMPUTERS</strong>. By purchasing licenses, subscribing to Cloud hosting servers, or registering Annual Maintenance Contracts (AMC) with us, you agree to comply with the following operational terms.
          </p>

          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide pt-2">1. Software Licensing Authority</h2>
          <p>
            BNB Computers is an Authorized Partner for TallyPrime (Tally Solutions) and BUSY Accounting Software (BUSY Infotech). All license purchases represent genuine activation keys delivered directly from developer pipelines. Copyrights and software updates are governed by the End User License Agreements (EULA) of Tally Solutions and BUSY Infotech respectively.
          </p>

          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide pt-2">2. Support SLA Commitments</h2>
          <p>
            For customers under a valid Annual Maintenance Contract (AMC) or Active Warranty:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-500">
            <li>We resolve critical billing-halting errors via AnyDesk/TeamViewer on priority.</li>
            <li>Response time for high-severity issues is capped at under 1 hour during standard working periods.</li>
            <li>On-site technician dispatches inside the Bathinda local area are scheduled based on coordinator availability.</li>
          </ul>

          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide pt-2">3. Client Ledger Responsibility</h2>
          <p>
            While we implement redundant automatic backups for our Cloud Hosting customers, the ultimate legal ownership, verification, and audit of financial logs, ledger ratios, tax compliance percentages, and file uploads rests solely on the client company's accountants.
          </p>

          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide pt-2">4. Customization (TDL) Limits</h2>
          <p>
            Customizations built through Tally Developer Languages (TDL) or BUSY macros are configured strictly according to parameters agreed in the work order. Major subsequent system changes (e.g., changing entire inventory models or multi-unit conversions) will be billed as separate service tickets.
          </p>

          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide pt-2">5. Legal Jurisdiction</h2>
          <p>
            All commercial contracts, invoices issued, support conflicts, and licensing agreements are subject exclusively to the regional courts of Bathinda, Punjab, India.
          </p>

          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide pt-2">6. Enquiries regarding Billing</h2>
          <p>
            For questions about renewals, licensing keys, or invoice queries, contact our accounts manager at <span className="text-blue-600 font-semibold">{companyDetails.email}</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
