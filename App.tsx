import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import CreativeBriefGenerator from './components/CreativeBriefGenerator';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-200 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <CreativeBriefGenerator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
