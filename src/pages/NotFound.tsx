import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Home, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="bg-slate-50 min-h-[70vh] flex flex-col justify-center items-center py-20 px-6">
      <SEO
        title="Page Not Found"
        description="The requested accounting resource is unavailable. Return to BNB COMPUTERS home screen."
      />

      <div className="max-w-md text-center space-y-6 bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl">
        <div className="p-4 bg-blue-50 text-blue-600 rounded-full w-fit mx-auto animate-bounce" style={{ animationDuration: '3s' }}>
          <HelpCircle className="w-12 h-12" />
        </div>

        <div className="space-y-2">
          <p className="text-sm font-black text-blue-600 uppercase tracking-widest">Error 404</p>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Voucher Not Found</h1>
          <p className="text-xs text-slate-500 leading-relaxed">
            The database page or support file you requested has been relocated or is currently undergoing offline compliance updates.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}
