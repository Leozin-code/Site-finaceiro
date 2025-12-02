import { 
  TrendingUp, 
  ShieldCheck, 
  PiggyBank, 
  Target, 
  Clock, 
  Smartphone, 
  FileText, 
  CheckCircle,
  AlertTriangle,
  BookOpen
} from 'lucide-react';

export const CHECKOUT_URL = "https://pay.kiwify.com.br/Ngi2bar";
export const PRODUCT_PRICE = "R$ 6,00";

export const NAV_LINKS = [
  { name: 'Início', href: '#home' },
  { name: 'Benefícios', href: '#benefits' },
  { name: 'Como Funciona', href: '#how-it-works' },
  { name: 'Resultados', href: '#results' },
  { name: 'Depoimentos', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
];

export const BENEFITS = [
  { icon: Target, title: 'Planejamento Prático', description: 'Método direto ao ponto para organizar seu mês em minutos.' },
  { icon: PiggyBank, title: 'Corte de Gastos', description: 'Identifique onde seu dinheiro está vazando e tape os buracos.' },
  { icon: TrendingUp, title: 'Evolução Constante', description: 'Veja seu patrimônio crescer mês a mês com técnicas simples.' },
  { icon: AlertTriangle, title: 'Controle de Dívidas', description: 'Estratégias validadas para negociar e quitar o que deve.' },
  { icon: Smartphone, title: 'Ferramentas Digitais', description: 'Acesso a templates e planilhas compatíveis com celular.' },
  { icon: CheckCircle, title: 'Checklist de Hábitos', description: 'Ações diárias que transformam sua mentalidade financeira.' },
  { icon: BookOpen, title: 'Guia Passo a Passo', description: 'Não precisa ser expert. Basta seguir o roteiro.' },
  { icon: Clock, title: 'Resultados em 30 Dias', description: 'Sinta a diferença no bolso já no primeiro mês de aplicação.' },
  { icon: ShieldCheck, title: 'Segurança Total', description: 'Métodos seguros baseados em educação financeira sólida.' },
  { icon: FileText, title: 'Exercícios Semanais', description: 'Desafios práticos para manter você focado no objetivo.' },
];

export const STEPS = [
  { title: "Entendendo a Base", description: "Aprenda os princípios fundamentais do dinheiro que a escola não te ensinou." },
  { title: "Diagnóstico Real", description: "Mapeie sua situação atual sem culpa e sem medo para saber por onde começar." },
  { title: "Faxina Financeira", description: "Técnicas imediatas para eliminar gastos invisíveis e renegociar pendências." },
  { title: "O Pote da Liberdade", description: "Comece a construir sua reserva de emergência com o que sobrar." },
  { title: "Multiplicação", description: "Veja o efeito dos juros compostos trabalhando a seu favor." },
];

export const TESTIMONIALS = [
  { name: "Carlos Mendes", role: "Motorista de App", text: "Eu achava que precisava ganhar muito para guardar dinheiro. Com esse guia, aprendi a sobrar 200 reais mesmo ganhando pouco.", img: "https://picsum.photos/seed/carlos/150/150" },
  { name: "Fernanda Lima", role: "Estudante", text: "Simples e direto. O preço é simbólico perto do valor que entrega. Já paguei meu cartão de crédito!", img: "https://picsum.photos/seed/fernanda/150/150" },
  { name: "Roberto Souza", role: "Vendedor", text: "A planilha que vem junto é sensacional. Finalmente sei para onde vai meu salário.", img: "https://picsum.photos/seed/roberto/150/150" },
  { name: "Juliana Alves", role: "Autônoma", text: "Comprei pelo preço de um café e economizei o valor de um jantar chique na primeira semana. Recomendo.", img: "https://picsum.photos/seed/juliana/150/150" },
  { name: "Ricardo Góes", role: "Engenheiro", text: "Mesmo ganhando bem, eu vivia no vermelho. O método me deu a organização que faltava.", img: "https://picsum.photos/seed/ricardo/150/150" },
  { name: "Ana Paula", role: "Dona de Casa", text: "Consegui organizar as contas da casa e ainda sobrou para o lazer com as crianças.", img: "https://picsum.photos/seed/ana/150/150" },
];

export const FAQS = [
  { question: "Quanto tempo leva para ver resultados?", answer: "A maioria dos alunos percebe uma 'folga' no orçamento logo nos primeiros 15 dias após aplicar o corte de gastos invisíveis." },
  { question: "Serve para quem está endividado?", answer: "Com certeza! Temos um módulo específico focado em negociação e priorização de dívidas." },
  { question: "Preciso ter conhecimento financeiro antes?", answer: "Não. O material foi feito para iniciantes, com linguagem simples e zero 'economês'." },
  { question: "Funciona para qualquer renda?", answer: "Sim. Os princípios de organização percentual funcionam se você ganha um salário mínimo ou dez." },
  { question: "É fácil de aplicar?", answer: "Extremamente. Focamos em ações práticas de 15 minutos por dia." },
  { question: "O conteúdo é atualizado?", answer: "Sim, revisamos o material periodicamente para garantir que as estratégias funcionem no cenário econômico atual." },
  { question: "Como recebo o acesso?", answer: "Imediatamente após a confirmação do pagamento, você recebe um e-mail com o link de acesso e download." },
  { question: "É seguro comprar?", answer: "Totalmente. O pagamento é processado pela Kiwify, uma das maiores e mais seguras plataformas de produtos digitais do Brasil." },
];