import React from 'react';

interface BNBLogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  lightMode?: boolean;
}

export default function BNBLogo({
  className = '',
  showTagline = true,
  size = 'md',
  lightMode = false,
}: BNBLogoProps) {
  // Dimensions based on size - made bigger and more eye-catching
  const sizeClasses = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl',
    xl: 'text-5xl md:text-6xl',
  };

  // Text gradient or high-contrast styling for the business name
  const textClass = lightMode
    ? 'bg-gradient-to-r from-white via-slate-100 to-blue-200 bg-clip-text text-transparent font-black tracking-tight'
    : 'bg-gradient-to-r from-blue-700 via-indigo-700 to-emerald-600 bg-clip-text text-transparent font-black tracking-tight';

  return (
    <div className={`flex flex-col items-start select-none ${className}`}>
      <div className="flex flex-col justify-center">
        <span className={`${sizeClasses[size]} ${textClass}`}>
          BNB COMPUTERS
        </span>
        {showTagline && (
          <span className={`text-[9px] uppercase tracking-[0.2em] font-extrabold mt-0.5 ${lightMode ? 'text-blue-300' : 'text-slate-500'}`}>
            Authorized Tally & Busy Partner
          </span>
        )}
      </div>
    </div>
  );
}
