import React from 'react';
import Button from './Button';
import { CHECKOUT_URL, PRODUCT_PRICE } from '../constants';

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Side */}
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Apresentando a Solução
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
              Domínio Financeiro: <br/>
              <span className="text-gray-500 text-2xl md:text-4xl font-bold">O Guia Definitivo</span>
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Não é apenas um ebook. É um <strong>sistema completo de resgate financeiro</strong>. Compilamos as melhores estratégias de economistas e consultores em um material acessível, direto ao ponto e focado em resultados rápidos.
            </p>

            <ul className="space-y-4">
              {[
                "Para quem quer sair das dívidas sem loucura.",
                "Para quem quer começar a investir com pouco.",
                "Para quem busca paz de espírito financeira."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-800 font-medium">
                  <span className="bg-brand-100 text-brand-600 p-1 rounded-full">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-6">
              <Button text="QUERO MEU ACESSO" className="w-full sm:w-auto" />
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-500 line-through">De R$ 47,90</p>
                <p className="text-2xl font-black text-brand-600">Por {PRODUCT_PRICE}</p>
              </div>
            </div>
          </div>

          {/* Image Side - Mockup */}
          <div className="order-1 lg:order-2 relative">
             <div className="relative mx-auto w-full max-w-md">
                {/* Simulated Book/Tablet Mockup */}
                <div className="relative bg-white rounded-xl shadow-2xl border-8 border-gray-900 aspect-[3/4] overflow-hidden transform rotate-3 hover:rotate-0 transition-all duration-500">
                   <img 
                    src="https://picsum.photos/seed/ebook_cover_finance/800/1000" 
                    alt="Capa do Ebook" 
                    className="w-full h-full object-cover"
                   />
                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                      <p className="font-bold text-lg">Inclui Planilha Automática</p>
                      <p className="text-sm opacity-80">+ Checklist Diário</p>
                   </div>
                </div>
                
                {/* Decorative Badge */}
                <div className="absolute -top-6 -right-6 bg-yellow-400 text-yellow-900 font-black rounded-full w-24 h-24 flex items-center justify-center rotate-12 shadow-lg border-4 border-white z-20">
                  <div className="text-center leading-none">
                    <span className="block text-xs">HOJE</span>
                    <span className="block text-xl">R$6</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;