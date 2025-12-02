import React from 'react';
import { STEPS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Como funciona o <span className="text-brand-600">Método</span>
          </h2>
          <p className="text-gray-500 mt-2">Simples, prático e em 5 etapas.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line (Hidden on mobile) */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-brand-100 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {STEPS.map((step, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Box */}
                <div className="flex-1 w-full">
                  <div className={`bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-brand-200 transition-colors ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-brand-600 font-bold text-sm tracking-wider uppercase mb-2 block">Passo {idx + 1}</span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 border-4 border-white shadow-lg flex items-center justify-center">
                   <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Empty Space for alignment */}
                <div className="flex-1 hidden md:block"></div>

              </div>
            ))}
          </div>
          
          {/* End cap */}
          <div className="text-center mt-12">
             <div className="inline-block bg-brand-100 text-brand-800 px-6 py-2 rounded-full font-bold text-sm">
               Resultado: Liberdade Financeira
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;