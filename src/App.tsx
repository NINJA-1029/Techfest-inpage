import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EventStrip } from './components/EventStrip';
import { About } from './components/About';
import { Experiences } from './components/Experiences';
import { CyborgModule } from './components/CyborgModule';
import { PlanVisit } from './components/PlanVisit';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="cyborg-app-root">
      <Navbar />
      <main>
        <Hero />
        <EventStrip />
        <About />
        <Experiences />
        <CyborgModule />
        <PlanVisit />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
