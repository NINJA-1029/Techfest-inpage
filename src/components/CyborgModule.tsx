import React, { useState } from 'react';
import { CYBORG_SUBSYSTEMS } from '../data/eventData';

export const CyborgModule: React.FC = () => {
  const [activeId, setActiveId] = useState<'neural' | 'optical' | 'mechanical'>('neural');
  const activeSubsystem = CYBORG_SUBSYSTEMS.find(s => s.id === activeId) || CYBORG_SUBSYSTEMS[0];

  return (
    <section id="interface" className="section-padding interface-section">
      <div className="container">
        
        <div className="section-header">
          <div className="hud-tag">// 03 · INTERACTIVE CONCEPT EXHIBIT</div>
          <h2 className="section-title">
            EXPLORE THE <span className="text-gradient-cyan">INTERFACE</span>.
          </h2>
          <p className="section-description">
            Deconstruct the cybernetic architecture. Select a subsystem to examine its functional convergence and design inspiration. (Creative conceptual module).
          </p>
        </div>

        <div className="subsystem-tabs-wrapper" role="tablist" aria-label="Cyborg Subsystems">
          {CYBORG_SUBSYSTEMS.map(sub => (
            <button
              key={sub.id}
              className={`subsystem-tab ${activeId === sub.id ? 'tab-active' : ''}`}
              role="tab"
              aria-selected={activeId === sub.id}
              onClick={() => setActiveId(sub.id)}
            >
              <span className="tab-code">{sub.code}</span>
              <span className="tab-name">{sub.title}</span>
            </button>
          ))}
        </div>

        <div className="module-console-grid">
          
          <div className="module-viewport-card hud-bracket titanium-panel">
            <div className="viewport-header">
              <span className="hud-mono-xs">// CYBORG ANATOMY TELEMETRY VIEWPORT</span>
              <span className="viewport-live-tag">LIVE HUD LINK</span>
            </div>

            <div className="module-canvas-wrapper">
              <img 
                src="/assets/cyborg_hero.jpg" 
                alt="Cyborg subsystem anatomy schematic"
                className="module-canvas-image"
                loading="lazy"
                width="600"
                height="600"
              />

              <div 
                id="module-reticle" 
                className="module-highlight-reticle" 
                style={{
                  top: activeSubsystem.regionCoordinates.top,
                  left: activeSubsystem.regionCoordinates.left,
                  width: activeSubsystem.regionCoordinates.width,
                  height: activeSubsystem.regionCoordinates.height
                }}
                aria-hidden="true"
              >
                <div className="reticle-corner r-tl"></div>
                <div className="reticle-corner r-tr"></div>
                <div className="reticle-corner r-bl"></div>
                <div className="reticle-corner r-br"></div>
                <div className="reticle-label">TARGET LOCKED</div>
              </div>
            </div>

            <div className="viewport-footer">
              <span className="hud-mono-xs">SURFACE: TITANIUM 6AL-4V / CARBON COMPOSITE</span>
              <span className="hud-mono-xs">REFRESH: 960 HZ REALTIME</span>
            </div>
          </div>

          <div className="module-telemetry-card hud-bracket">
            <div className="telemetry-card-header">
              <span className="hud-mono text-cyan">// {activeSubsystem.code}</span>
              <h3 className="subsystem-title-text">{activeSubsystem.title}</h3>
              <span className="subsystem-sub-text">{activeSubsystem.subtitle}</span>
            </div>

            <p className="subsystem-desc-text">
              {activeSubsystem.description}
            </p>

            <div className="design-inspiration-box">
              <div className="inspiration-header">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8FF5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                <span className="inspiration-label">DESIGN INSPIRATION</span>
              </div>
              <p className="inspiration-text">
                {activeSubsystem.designInspiration}
              </p>
            </div>

            <div className="subsystem-specs-box">
              <div className="specs-title">// HARDWARE SPECIFICATIONS</div>
              <div className="specs-grid">
                {activeSubsystem.specs.map(spec => (
                  <div key={spec.label} className="spec-row">
                    <span className="spec-label">{spec.label}</span>
                    <span className="spec-value">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="subsystem-telemetry-box">
              <div className="specs-title">// TELEMETRY SIGNALS</div>
              <div className="telemetry-pills-row">
                {activeSubsystem.telemetry.map(t => (
                  <div key={t.metric} className="telemetry-pill">
                    <span className={`telemetry-dot dot-${t.status}`}></span>
                    <span className="telemetry-metric">{t.metric}:</span>
                    <span className="telemetry-val">{t.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
