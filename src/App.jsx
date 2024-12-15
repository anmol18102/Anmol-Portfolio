import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-800 transition-colors">
        <Header />
        <main className="pt-16">
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;