import React from 'react';
import { ShieldCheck } from 'lucide-react';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-brand-50 rounded-3xl p-8 md:p-12 border border-brand-100">
          <div className="flex-shrink-0">
             <div className="w-32 h-32 md:w-40 md:h-40 relative">
               <img 
                 src="https://picsum.photos/seed/badge_guarantee/200/200" 
                 alt="Selo de Garantia" 
                 className="w-full h-full object-contain mix-blend-multiply opacity-80"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <ShieldCheck size={64} className="text-brand-600" />
               </div>
             </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Garantia Incondicional de 7 Dias
            </h3>
            <p className="text-gray-700 mb-4">
              O risco é todo nosso. Se você aplicar o método e achar que não valeu os R$ 6,00 investidos, basta enviar um único e-mail e devolvemos 100% do seu dinheiro. Sem perguntas, sem letras miúdas.
            </p>
            <p className="text-sm font-bold text-brand-700 uppercase tracking-wide">
              Satisfação Garantida ou Seu Dinheiro de Volta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;