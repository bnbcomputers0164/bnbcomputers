import React from 'react';
import SEO from '../components/SEO';
import { companyDetails } from '../data/companyData';

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-20">
      <SEO
        title="Privacy Policy - Data Security Commitment"
        description="Review BNB COMPUTERS' strict privacy procedures. We protect customer bookkeeping databases, ERP licenses keys, and cloud server hosting snapshots securely."
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 space-y-6">
        <div className="space-y-1 pb-6 border-b border-slate-100">
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Statutory Regulations</span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Privacy Policy</h1>
          <p className="text-xs text-slate-400">Last updated: July 20, 2026</p>
        </div>

        <div className="text-slate-600 text-xs sm:text-sm leading-relaxed space-y-5">
          <p>
            At <strong>BNB COMPUTERS</strong>, operating from our headquarters in Bathinda, Punjab, we are deeply committed to protecting the financial data, ledger records, database files, and licensing credentials of our client businesses.
          </p>

          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide pt-2">1. Information We Collect</h2>
          <p>
            We collect basic operational contact parameters (such as business names, registered billing addresses, mobile numbers, and emails) purely to register genuine licenses with Tally Solutions and BUSY Infotech.
          </p>

          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide pt-2">2. ERP Database Confidentiality</h2>
          <p>
            Strictest safety: During support migrations, software data splits, or custom TDL debugging, our technicians may handle your offline `.900` Tally data files or SQL backups. BNB Computers guarantees zero copy duplication, zero leaks, and instant, secure deletion of support databases from our local drives upon support resolution.
          </p>

          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide pt-2">3. Cloud ERP Server Security</h2>
          <p>
            For clients running Tally or BUSY on our Cloud Hosting systems, all virtual folders are fully sandboxed. Only your registered remote desktop (RDP) users can connect. We execute automated nightly encrypted snapshots. BNB Computers personnel have zero authority to access your operational books without explicit permission during ticket resolutions.
          </p>

          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide pt-2">4. WhatsApp Invoicing Safeguards</h2>
          <p>
            Our customized WhatsApp dispatch engines interact directly with Meta's official secure Cloud API. No ledger contents, voucher PDF values, or customer mobile numbers are stored on secondary third-party servers.
          </p>

          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide pt-2">5. Indian IT Law Compliance</h2>
          <p>
            We manage and secure all consumer metadata strictly according to Section 43A of the Information Technology Act, 2000 of India, ensuring a highly trustworthy relationship for all MSMEs across Punjab.
          </p>

          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide pt-2">6. Contacting Our Data Desk</h2>
          <p>
            If you need to audit, transfer, or delete your registered email alerts, write to us directly at <span className="text-blue-600 font-semibold">{companyDetails.email}</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
