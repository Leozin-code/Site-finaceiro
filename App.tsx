import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import BenefitsSection from './components/BenefitsSection';
import HowItWorks from './components/HowItWorks';
import ResultsSection from './components/ResultsSection';
import Testimonials from './components/Testimonials';
import GuaranteeSection from './components/GuaranteeSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased text-gray-900 bg-white font-sans selection:bg-brand-200 selection:text-brand-900">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <HowItWorks />
        <ResultsSection />
        <Testimonials />
        <GuaranteeSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;