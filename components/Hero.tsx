import React from 'react';
import Button from './Button';
import { CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://picsum.photos/seed/finance_happy/1920/1080" 
          alt="Background finance" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent z-0"></div>

      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="text-center md:text-left space-y-6">
          <div className="inline-flex items-center gap-2 bg-brand-500/20 border border-brand-500/30 text-brand-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-2 backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
            </span>
            Oferta por Tempo Limitado: Apenas R$ 6,00
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
            Pare de Sobreviver e Comece a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-green-300">Viver Seu Dinheiro</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
            Descubra o método simples para organizar suas finanças, eliminar o caos das contas e fazer sobrar dinheiro todos os meses — mesmo começando do zero absoluto.
          </p>

          <div className="flex flex-col gap-4 items-center md:items-start pt-4">
            <Button text="QUERO ECONOMIZAR AGORA" subtext="Acesso Imediato + Bônus Exclusivos" />
            <p className="text-xs text-gray-400 flex items-center gap-1">
              <CheckCircle size={12} className="text-brand-500" /> Compra 100% Segura via Kiwify
            </p>
          </div>
        </div>

        {/* Right Content - Visual */}
        <div className="relative hidden md:block">
            <div className="relative z-10 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <div className="bg-white p-2 rounded-2xl shadow-2xl max-w-md mx-auto">
                <img 
                  src="https://picsum.photos/seed/dashboard_finance/600/800" 
                  alt="App de Finanças" 
                  className="rounded-xl w-full h-auto border border-gray-100"
                />
                {/* Float Card */}
                <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-xl shadow-xl border-l-4 border-brand-500 flex items-center gap-4 animate-bounce-slow">
                   <div className="bg-green-100 p-3 rounded-full text-green-600">
                     <CheckCircle size={24} />
                   </div>
                   <div>
                     <p className="text-xs text-gray-500 font-semibold uppercase">Resultado Mensal</p>
                     <p className="text-xl font-bold text-gray-800">+ R$ 1.250,00</p>
                   </div>
                </div>
              </div>
            </div>
            
            {/* Decorative blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-600/30 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;