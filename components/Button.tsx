import React from 'react';
import { CHECKOUT_URL } from '../constants';

interface ButtonProps {
  text: string;
  subtext?: string;
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, subtext, fullWidth = false, className = '' }) => {
  return (
    <a 
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative inline-flex flex-col items-center justify-center 
        px-8 py-4 text-white transition-all duration-300 ease-in-out
        bg-brand-600 hover:bg-brand-500 hover:scale-105 shadow-lg hover:shadow-brand-500/50
        rounded-xl font-bold uppercase tracking-wide border-b-4 border-brand-900 active:border-b-0 active:translate-y-1
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${className}
      `}
    >
      <span className="text-xl md:text-2xl flex items-center gap-2">
        {text} 
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </span>
      {subtext && (
        <span className="text-xs md:text-sm opacity-90 font-normal normal-case mt-1">
          {subtext}
        </span>
      )}
    </a>
  );
};

export default Button;