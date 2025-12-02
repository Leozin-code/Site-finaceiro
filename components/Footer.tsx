import React from 'react';
import Button from './Button';
import { DollarSign } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    if (id === '#' || id === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="container mx-auto px-4">
        
        {/* Final CTA Box */}
        <div className="bg-brand-600 rounded-3xl p-8 md:p-16 text-center text-white mb-16 shadow-2xl transform md:-translate-y-24 border-4 border-gray-800">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Não deixe para amanhã a economia que você pode fazer hoje.
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Por apenas R$ 6,00, você recebe o mapa completo para sair do vermelho. É menos que um lanche.
          </p>
          <div className="inline-block bg-white p-2 rounded-2xl">
            <Button 
              text="ACESSAR AGORA POR R$ 6,00" 
              className="!border-b-brand-800 text-brand-900 !bg-yellow-400 hover:!bg-yellow-300 w-full md:w-auto" 
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 border-t border-gray-800 pt-12 md:-mt-8">
          <div className="col-span-1 md:col-span-2">
            <button 
              onClick={() => scrollToSection('#')} 
              className="flex items-center gap-2 text-white font-black text-xl mb-4 bg-transparent border-none cursor-pointer hover:opacity-80"
            >
              <div className="bg-brand-600 p-1 rounded-md">
                <DollarSign size={20} />
              </div>
              DOMÍNIO FINANCEIRO
            </button>
            <p className="text-sm max-w-xs text-left">
              Nossa missão é democratizar a educação financeira no Brasil com produtos acessíveis e de alta qualidade.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollToSection('#benefits')} className="hover:text-brand-500 transition-colors bg-transparent border-none cursor-pointer">Benefícios</button></li>
              <li><button onClick={() => scrollToSection('#results')} className="hover:text-brand-500 transition-colors bg-transparent border-none cursor-pointer">Resultados</button></li>
              <li><button onClick={() => scrollToSection('#testimonials')} className="hover:text-brand-500 transition-colors bg-transparent border-none cursor-pointer">Depoimentos</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="javascript:void(0)" className="hover:text-brand-500 transition-colors cursor-default">Termos de Uso</a></li>
              <li><a href="javascript:void(0)" className="hover:text-brand-500 transition-colors cursor-default">Política de Privacidade</a></li>
              <li><span className="text-xs text-gray-600">CNPJ: 00.000.000/0001-00</span></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs mt-12 pt-8 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} Domínio Financeiro. Todos os direitos reservados.</p>
          <p className="mt-2 text-gray-600">Este site não é afiliado ao Facebook ou Google. Os resultados variam de pessoa para pessoa.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;