import React, { useState, useEffect } from 'react';
import { EVENT_METADATA } from '../data/eventData';

export const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', mins: '00', secs: '00' });

  useEffect(() => {
    const targetDate = new Date('2026-12-16T09:00:00+05:30').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: '00', hours: '00', mins: '00', secs: '00' });
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days: d < 10 ? '0' + d : String(d),
        hours: h < 10 ? '0' + h : String(h),
        mins: m < 10 ? '0' + m : String(m),
        secs: s < 10 ? '0' + s : String(s)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        
        <div className="hero-content">
          <div className="hero-eyebrow-wrapper">
            <span className="hud-tag">TECHFEST ’26 / IIT BOMBAY</span>
            <span className="hero-concept-badge">CREATIVE STUDY // CYBORG</span>
          </div>

          <h1 className="hero-headline">
            THE NEXT<br />
            <span className="text-gradient-cyan">EVOLUTION</span><br />
            STARTS HERE.
          </h1>

          <p className="hero-tagline">
            “{EVENT_METADATA.tagline}”
          </p>

          <p className="hero-description">
            Explore the frontier of human ingenuity, robotics, and emerging technology. Enter Asia’s largest science and technology festival where biological imagination converges with synthetic precision.
          </p>

          <div className="hero-event-metadata">
            <div className="metadata-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4DEBFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <span><strong>{EVENT_METADATA.datesConfirmed}</strong></span>
            </div>
            <div className="metadata-separator">/</div>
            <div className="metadata-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8FF5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span><strong>{EVENT_METADATA.locationConfirmed}</strong></span>
            </div>
            <div className="metadata-separator">/</div>
            <div className="metadata-item hud-mono-sm">
              <span>{EVENT_METADATA.coordinates}</span>
            </div>
          </div>

          <div className="hero-cta-group">
            <a href="#experiences" className="btn-primary hero-btn">
              <span>Explore Experiences</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
            </a>
            <a href={EVENT_METADATA.officialUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary hero-btn">
              <span>Visit Official Techfest</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
          </div>

          <div className="hero-countdown-box hud-bracket">
            <div className="countdown-header">
              <span className="countdown-label">// T-MINUS TO CONVERGENCE</span>
              <span className="countdown-edition">DEC 16, 2026 · 09:00 IST</span>
            </div>
            <div className="countdown-grid">
              <div className="countdown-cell">
                <span id="cd-days" className="cd-value">{timeLeft.days}</span>
                <span className="cd-label">DAYS</span>
              </div>
              <div className="countdown-colon">:</div>
              <div className="countdown-cell">
                <span id="cd-hours" className="cd-value">{timeLeft.hours}</span>
                <span className="cd-label">HOURS</span>
              </div>
              <div className="countdown-colon">:</div>
              <div className="countdown-cell">
                <span id="cd-mins" className="cd-value">{timeLeft.mins}</span>
                <span className="cd-label">MINUTES</span>
              </div>
              <div className="countdown-colon">:</div>
              <div className="countdown-cell">
                <span id="cd-secs" className="cd-value">{timeLeft.secs}</span>
                <span className="cd-label">SECONDS</span>
              </div>
            </div>
          </div>

        </div>

        <div className="hero-visual-wrapper">
          <div id="hero-artwork-frame" className="hero-artwork-card hud-bracket titanium-panel light-sweep-container">
            <img 
              src="/assets/cyborg_hero.jpg" 
              alt="Cyborg mechanical bust embodying convergence of human intelligence and precision titanium robotics"
              className="hero-artwork-image"
              width="600"
              height="600"
              fetchPriority="high"
            />

            <div className="optic-reticle hero-optic-target" aria-hidden="true"></div>

            <div className="hud-annotation anno-top-right">
              <div className="anno-pill">
                <span className="anno-dot"></span>
                <span>OPTIC_MATRIX // MK-VI [ONLINE]</span>
              </div>
            </div>

            <div className="hud-annotation anno-top-left">
              <div className="anno-pill">
                <span>TELEMETRY // CONVERGENCE ESTABLISHED</span>
              </div>
            </div>

            <div className="hud-annotation anno-bottom-left">
              <div className="anno-pill">
                <span>CHASSIS // BRUSHED TITANIUM 6AL-4V</span>
              </div>
            </div>

            <div className="hud-annotation anno-bottom-right">
              <div className="anno-pill">
                <span className="anno-lime-dot"></span>
                <span>NEURAL INTEGRATION // 98.4% NOMINAL</span>
              </div>
            </div>

            <div className="crosshair crosshair-tl" aria-hidden="true">+</div>
            <div className="crosshair crosshair-tr" aria-hidden="true">+</div>
            <div className="crosshair crosshair-bl" aria-hidden="true">+</div>
            <div className="crosshair crosshair-br" aria-hidden="true">+</div>
          </div>
        </div>

      </div>
    </section>
  );
};
