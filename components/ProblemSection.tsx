import React from 'react';
import { AlertTriangle, TrendingDown, Frown } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Você sente que trabalha apenas para <span className="text-red-600">pagar boletos?</span>
          </h2>
          <p className="text-lg text-gray-600">
            Você não está sozinho. Infelizmente, dados mostram que mais de 70% dos brasileiros vivem endividados ou sem nenhuma reserva financeira.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: TrendingDown,
              title: "O Dinheiro Some",
              desc: "Você recebe o salário e, em menos de 5 dias, parece que ele evaporou sem você ver para onde foi."
            },
            {
              icon: AlertTriangle,
              title: "Ansiedade Constante",
              desc: "O medo de abrir o aplicativo do banco ou receber uma ligação de cobrança tira seu sono à noite."
            },
            {
              icon: Frown,
              title: "Sem Futuro",
              desc: "Você vê outras pessoas viajando, comprando carro, e sente que sua vida está estagnada financeiramente."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow text-center group">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-900 text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-red-600/10 z-0"></div>
          <img 
            src="https://picsum.photos/seed/stressed_bills/400/400" 
            alt="Pessoa preocupada" 
            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white/20 relative z-10"
          />
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Isso precisa acabar hoje.</h3>
            <p className="text-gray-300 mb-6">
              Não deixe que a falta de organização roube seus melhores anos. Existe um caminho testado e validado para sair desse ciclo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;