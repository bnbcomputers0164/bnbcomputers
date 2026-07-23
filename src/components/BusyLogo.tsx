import React from 'react';

interface BusyLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function BusyLogo({ className = "h-7 w-auto", size = 'md' }: BusyLogoProps) {
  return (
    <div className={`inline-flex items-center gap-1.5 select-none ${className}`}>
      <svg
        viewBox="0 0 135 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        {/* Letter B */}
        <text
          x="0"
          y="27"
          fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
          fontWeight="900"
          fontSize="30"
          fill="#111827"
          letterSpacing="-0.5"
        >
          B
        </text>

        {/* Letter U - Base Loop & Left Stem (Dark) */}
        <path
          d="M 28 6 L 28 19 C 28 23.5 30.5 26.5 36.5 26.5 C 42.5 26.5 45 23.5 45 19 L 45 16"
          stroke="#111827"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Letter U - Top Right Accent (Electric Blue) */}
        <path
          d="M 45 6 L 45 13"
          stroke="#2563EB"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Letter S */}
        <text
          x="53"
          y="27"
          fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
          fontWeight="900"
          fontSize="30"
          fill="#111827"
          letterSpacing="-0.5"
        >
          S
        </text>

        {/* Letter Y */}
        <text
          x="75"
          y="27"
          fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
          fontWeight="900"
          fontSize="30"
          fill="#111827"
          letterSpacing="-0.5"
        >
          Y
        </text>
      </svg>
    </div>
  );
}
