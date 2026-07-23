import React, { useState } from 'react';
import { Search, Calendar, User, Clock, ArrowRight, X, Sparkles, HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { blogArticles } from '../data/companyData';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [readingArticle, setReadingArticle] = useState<typeof blogArticles[0] | null>(null);

  const categories = ['All', 'GST & Compliance', 'Cloud Computing', 'Business Automation'];

  // Filtering Logic
  const filteredArticles = blogArticles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="Knowledge Hub - GST Updates & Accounting Software Blog"
        description="Stay compliant and automated. Read guides on TallyPrime updates, BUSY setups, Indian GST compliance rules, and cloud ERP hostings from BNB Computers."
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-4">
          <span className="px-3 py-1 bg-blue-500/25 border border-blue-400/25 text-blue-200 text-xs font-bold uppercase tracking-wider rounded-full">
            Knowledge Hub
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Compliance, Cloud & ERP Insights
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Practical advice, statutory GST regulations breakdowns, and automated accounting workflows compiled by the certified BNB technical engineering desk.
          </p>
        </div>
      </section>

      {/* Search and Filters Strip */}
      <section className="py-8 bg-white border-b border-slate-100 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-4 justify-between items-center">
          
          {/* Categories Tab list */}
          <div className="flex flex-wrap gap-2 order-2 md:order-1 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg border transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar input */}
          <div className="relative w-full max-w-xs order-1 md:order-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-9 pr-4 py-2 text-xs text-slate-900 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          </div>

        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Image header */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={article.imagePlaceholder}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white bg-blue-600 rounded">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Info body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-[10px] text-slate-400 font-semibold">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 line-clamp-2 tracking-tight group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                    <div className="text-[10px]">
                      <p className="font-bold text-slate-800">{article.author}</p>
                      <p className="text-slate-400">{article.authorRole}</p>
                    </div>
                    
                    <button
                      onClick={() => setReadingArticle(article)}
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer group-hover:translate-x-1 transition-transform"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 space-y-3">
            <p className="text-slate-400 text-sm">No articles matched your current queries.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
            >
              Reset Search Parameters
            </button>
          </div>
        )}
      </section>

      {/* Immersive Reading Modal Overlay */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
          <div className="bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col max-h-[90vh]">
            
            {/* Modal sticky top */}
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50 shrink-0">
              <span className="px-2.5 py-0.5 bg-blue-50 text-blue-700 font-bold text-[10px] rounded uppercase tracking-wider">
                {readingArticle.category}
              </span>
              <button
                onClick={() => setReadingArticle(null)}
                className="p-1.5 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                aria-label="Close reading panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal scrollable body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
              
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  <span>📅 {readingArticle.date}</span>
                  <span>⏱ {readingArticle.readTime}</span>
                  <span>✍ {readingArticle.author}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                  {readingArticle.title}
                </h2>
              </div>

              {/* Cover image */}
              <div className="h-64 rounded-2xl overflow-hidden border border-slate-100">
                <img
                  src={readingArticle.imagePlaceholder}
                  alt={readingArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Content - Clean layout formatting */}
              <div className="text-slate-600 text-xs sm:text-sm leading-relaxed space-y-4">
                <p className="font-semibold text-slate-800 text-sm md:text-base border-l-4 border-blue-600 pl-4 py-1 bg-blue-50/40 rounded-r-lg">
                  {readingArticle.excerpt}
                </p>
                <div className="space-y-4">
                  {/* Split block paragraphs to represent long-form reading content */}
                  {readingArticle.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Tags cluster */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100 text-[10px]">
                {readingArticle.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-slate-100 text-slate-500 rounded font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer actions */}
            <div className="px-6 py-4.5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row gap-3 justify-between items-center shrink-0">
              <div className="text-left">
                <p className="text-[11px] font-bold text-slate-800">{readingArticle.author}</p>
                <p className="text-[10px] text-slate-400">{readingArticle.authorRole} · BNB COMPUTERS</p>
              </div>
              <button
                onClick={() => {
                  setReadingArticle(null);
                  setTimeout(() => {
                    const callbackBtn = document.getElementById('floating-callback-btn');
                    if (callbackBtn) callbackBtn.click();
                  }, 350);
                }}
                className="w-full sm:w-auto px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer transition-colors"
              >
                Consult on this topic
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
