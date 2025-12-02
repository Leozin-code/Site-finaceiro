import React from 'react';
import { BENEFITS } from '../constants';

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Tudo o que você ganha ao <span className="text-brand-600">entrar hoje</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Mais do que um arquivo PDF. É o seu novo manual de sobrevivência e prosperidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon size={24} />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;