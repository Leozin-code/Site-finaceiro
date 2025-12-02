import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mês 0', value: 0 },
  { name: 'Mês 1', value: 300 },
  { name: 'Mês 2', value: 850 },
  { name: 'Mês 3', value: 1600 },
  { name: 'Mês 4', value: 2400 },
  { name: 'Mês 6', value: 4500 },
];

const ResultsSection: React.FC = () => {
  return (
    <section id="results" className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Visualize seu <span className="text-brand-400">Crescimento</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Ao aplicar o método <strong>Domínio Financeiro</strong>, este é o cenário conservador de acumulação de capital (reserva) para quem consegue economizar apenas R$ 10,00 por dia cortando gastos supérfluos, com reinvestimento básico.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <p className="text-gray-400 text-sm">Economia Mensal Média</p>
                <p className="text-3xl font-bold text-brand-400">R$ 300 - R$ 800</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <p className="text-gray-400 text-sm">Tempo para Estabilidade</p>
                <p className="text-3xl font-bold text-white">90 Dias</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full h-[400px] bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
            <h3 className="text-center font-semibold mb-6 text-gray-300">Projeção de Acumulação Acumulada (Reais)</h3>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
                <YAxis stroke="#9ca3af" fontSize={12} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#fff' }}
                  itemStyle={{ color: '#4ade80' }}
                />
                <Area type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResultsSection;