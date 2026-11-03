import React, { useState } from 'react';

interface ProbeInfo {
  title: string;
  desc: string;
  rate: string;
  bandwidth: string;
}

const PROBE_DATA: Record<string, ProbeInfo> = {
  synapse: {
    title: 'Biological Synaptic Node',
    desc: 'Organic neuronal junction transmitting neurochemical potentials with micro-millivolt sensitivity.',
    rate: '99.1% Fidelity',
    bandwidth: '2.4 Giga-Synapses/sec',
  },
  transition: {
    title: 'Neural Transition Zone',
    desc: 'Hybrid interface converting organic ionic currents into deterministic sub-nanosecond CMOS binary pulses.',
    rate: '< 0.15ms Latency',
    bandwidth: '8.8 Tbps Parallel Bus',
  },
  silicon: {
    title: 'Data Processing Core',
    desc: 'Neuromorphic 7nm silicon matrix executing continuous tensor matrix calculations with hardware logic gates.',
    rate: '100% Deterministic',
    bandwidth: '256 Cores @ 4.2 GHz',
  },
};

export const About: React.FC = () => {
  const [activeProbe, setActiveProbe] = useState<'synapse' | 'transition' | 'silicon'>('synapse');
  const currentProbe = PROBE_DATA[activeProbe];

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        
        <div className="section-header">
          <div className="hud-tag">// 01 · FOUNDATIONAL PREMISE</div>
          <h2 className="section-title">
            WHERE BIOLOGICAL INGENUITY<br />
            <span className="text-gradient-cyan">CONVERGES WITH SYNTHETIC MASTERY</span>.
          </h2>
          <p className="section-description">
            The creative concept for Techfest ’26 reflects a turning point in history: the threshold where human adaptability, ethical intuition, and scientific imagination unify with autonomous robotics and deterministic computation.
          </p>
        </div>

        <div className="about-grid">
          
          <div className="about-pillars">
            <div className="pillar-card hud-bracket">
              <div className="pillar-header">
                <span className="pillar-num">01 // COGNITION</span>
                <span className="pillar-badge badge-cyan">ORGANIC ORIGIN</span>
              </div>
              <h3 className="pillar-title">Human Intelligence & Vision</h3>
              <p className="pillar-text">
                Visionary scientific curiosity, ethical governance, and creative leap. Technology is guided by human purpose, solving global dilemmas through empathy and unscripted problem-solving.
              </p>
              <div className="pillar-footer">
                <span className="hud-mono-xs">ATTRIBUTES: ETHICS · ABSTRACT REASONING · INTUITION</span>
              </div>
            </div>

            <div className="pillar-card hud-bracket">
              <div className="pillar-header">
                <span className="pillar-num">02 // PRECISION</span>
                <span className="pillar-badge badge-lime">SYNTHETIC MATRIX</span>
              </div>
              <h3 className="pillar-title">Machine Accuracy & Robotics</h3>
              <p className="pillar-text">
                Deterministic algorithmic speed, millimeter-precise robotics kinematics, and high-frequency sensor fusion capable of operating in hostile, deep-space, or micro-scale environments.
              </p>
              <div className="pillar-footer">
                <span className="hud-mono-xs">ATTRIBUTES: DETERMINISM · SUB-MILLIMETER KINEMATICS · SCALE</span>
              </div>
            </div>

            <div className="pillar-card hud-bracket">
              <div className="pillar-header">
                <span className="pillar-num">03 // SYNTHESIS</span>
                <span className="pillar-badge badge-cyan">THE CYBORG NEXUS</span>
              </div>
              <h3 className="pillar-title">Symbiotic Future</h3>
              <p className="pillar-text">
                The convergence zone where bionic prosthetics restore human mobility, neural interfaces accelerate communication, and AI serves as a cognitive exoskeleton for global innovators.
              </p>
              <div className="pillar-footer">
                <span className="hud-mono-xs">ATTRIBUTES: BIO-NEURAL COUPLING · SENSORY AUGMENTATION</span>
              </div>
            </div>
          </div>

          <div className="about-schematic-wrapper">
            <div className="schematic-card hud-bracket titanium-panel">
              
              <div className="schematic-header">
                <div className="schematic-title-group">
                  <span className="hud-mono-xs">// BLUEPRINT: NEURAL-TO-CIRCUIT CONVERGENCE</span>
                  <span className="schematic-status">SIMULATED ARCHITECTURE</span>
                </div>
                <div className="schematic-probe-selector" role="group" aria-label="Select Probe Hotspot">
                  <button 
                    className={`schematic-probe ${activeProbe === 'synapse' ? 'probe-active' : ''}`}
                    onClick={() => setActiveProbe('synapse')}
                    aria-pressed={activeProbe === 'synapse'}
                  >
                    Probe A
                  </button>
                  <button 
                    className={`schematic-probe ${activeProbe === 'transition' ? 'probe-active' : ''}`}
                    onClick={() => setActiveProbe('transition')}
                    aria-pressed={activeProbe === 'transition'}
                  >
                    Probe B
                  </button>
                  <button 
                    className={`schematic-probe ${activeProbe === 'silicon' ? 'probe-active' : ''}`}
                    onClick={() => setActiveProbe('silicon')}
                    aria-pressed={activeProbe === 'silicon'}
                  >
                    Probe C
                  </button>
                </div>
              </div>

              <div className="schematic-image-container">
                <img 
                  src="/assets/neural_schematic.jpg" 
                  alt="Futuristic neural to circuit convergence diagram showing biological synapses transitioning into silicon microchip architecture"
                  className="schematic-image"
                  loading="lazy"
                  width="800"
                  height="450"
                />
              </div>

              <div className="schematic-telemetry-readout">
                <div className="readout-header">
                  <span className="readout-tag">// ACTIVE PROBE TELEMETRY</span>
                  <span className="readout-rate">{currentProbe.rate}</span>
                </div>
                <h4 className="readout-title">{currentProbe.title}</h4>
                <p className="readout-desc">{currentProbe.desc}</p>
                <div className="readout-meta">
                  <span className="readout-meta-label">THROUGHPUT:</span>
                  <span className="readout-meta-val">{currentProbe.bandwidth}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
