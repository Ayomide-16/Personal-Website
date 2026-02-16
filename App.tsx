import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen antialiased selection:bg-primary-100 selection:text-primary-900">
      {/* Decorative top border sits above the header */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-cyan-500 z-50"></div>

      <Header />

      <main className="flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Education />
        <Skills />
        <Certifications />
        <Awards />
      </main>
      <Footer />
    </div>
  );
};

export default App;