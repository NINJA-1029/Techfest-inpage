import React from 'react';
import { EVENT_METADATA } from '../data/eventData';

export const PlanVisit: React.FC = () => {
  return (
    <section id="plan" className="section-padding plan-section">
      <div className="container">
        
        <div className="section-header">
          <div className="hud-tag">// 04 · LOGISTICS & CAMPUS ORIENTATION</div>
          <h2 className="section-title">
            PLAN YOUR <span className="text-gradient-cyan">CAMPUS JOURNEY</span>.
          </h2>
          <p className="section-description">
            Confirmed event dates, verified campus coordinates, and official entry pathways for Techfest ’26 at IIT Bombay.
          </p>
        </div>

        <div className="plan-grid">
          
          <div className="plan-info-card hud-bracket">
            <div className="plan-card-section">
              <span className="plan-meta-label">// CONFIRMED DATES & TIMINGS</span>
              <h3 className="plan-h3">{EVENT_METADATA.datesConfirmed}</h3>
              <p className="plan-p">Daily campus arena doors open at 09:00 IST. Keynotes, championships, and evening showcases conclude by 21:30 IST.</p>
            </div>

            <div className="plan-card-section">
              <span className="plan-meta-label">// VENUE LOCATION</span>
              <h3 className="plan-h3">{EVENT_METADATA.locationConfirmed}</h3>
              <p className="plan-p">
                Indian Institute of Technology Bombay, Main Gate Road, Powai, Mumbai, Maharashtra 400076, India.<br />
                <span className="hud-mono-xs text-cyan">COORDINATES: {EVENT_METADATA.coordinates}</span>
              </p>
            </div>

            <div className="verification-alert">
              <div className="alert-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8FF5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              </div>
              <div className="alert-text">
                <strong>OFFICIAL REGISTRATION NOTICE:</strong> All competitor registrations, visitor access passes, and workshop ticketing are handled exclusively via the official website (<strong>techfest.org</strong>). Do not rely on unverified third-party booking agents.
              </div>
            </div>

            <div className="plan-actions">
              <a href={EVENT_METADATA.officialUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <span>Official Registration Portal</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>
              <a href="https://www.iitb.ac.in" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <span>IIT Bombay Campus Guide</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>
            </div>
          </div>

          <div className="plan-map-card hud-bracket titanium-panel">
            <div className="map-card-header">
              <span className="hud-mono-xs">// IIT BOMBAY CAMPUS SCHEMATIC [POWAI LAKE]</span>
              <span className="map-status">ZONE MAP ACTIVE</span>
            </div>

            <div className="campus-svg-map-wrapper">
              <svg viewBox="0 0 600 420" className="campus-schematic-svg" xmlns="http://www.w3.org/2000/svg" aria-label="IIT Bombay Campus schematic map showing key festival landmarks">
                <defs>
                  <pattern id="hud-grid-react" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(77, 235, 255, 0.08)" strokeWidth="1"/>
                  </pattern>
                  <radialGradient id="lake-grad-react" cx="20%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#141E2A" />
                    <stop offset="100%" stopColor="#0A1017" />
                  </radialGradient>
                </defs>
                <rect width="600" height="420" fill="url(#hud-grid-react)" />

                <path d="M 10 40 Q 120 60, 200 130 T 260 280 Q 220 380, 10 410 Z" fill="url(#lake-grad-react)" stroke="#233547" strokeWidth="1.5" />
                <text x="60" y="210" fill="#4DEBFF" fontFamily="'JetBrains Mono', monospace" fontSize="11" opacity="0.6" letterSpacing="2">POWAI LAKE SHORELINE</text>

                <path d="M 580 340 L 360 260 L 290 190 L 320 110" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" strokeDasharray="6,4" />
                <path d="M 360 260 L 460 160 L 410 80" fill="none" stroke="rgba(77, 235, 255, 0.3)" strokeWidth="2" />
                <path d="M 290 190 L 220 180" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />

                <g className="map-node" transform="translate(560, 335)">
                  <circle r="7" fill="#4DEBFF" opacity="0.9" />
                  <circle r="14" fill="none" stroke="#4DEBFF" strokeWidth="1" opacity="0.4" />
                  <text x="-120" y="5" fill="#EAF2F8" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="12">MAIN GATE [ENTRY]</text>
                </g>

                <g className="map-node" transform="translate(360, 260)">
                  <circle r="8" fill="#C8FF5F" />
                  <circle r="16" fill="none" stroke="#C8FF5F" strokeWidth="1" opacity="0.4" />
                  <text x="22" y="4" fill="#C8FF5F" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="12">CONVOCATION HALL [KEYNOTES]</text>
                </g>

                <g className="map-node" transform="translate(290, 190)">
                  <circle r="9" fill="#4DEBFF" />
                  <circle r="18" fill="none" stroke="#4DEBFF" strokeWidth="1.5" opacity="0.5" />
                  <text x="-185" y="-12" fill="#4DEBFF" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="12">GYMKHANA [ROBOTICS ARENAS]</text>
                </g>

                <g className="map-node" transform="translate(460, 160)">
                  <circle r="6" fill="#EAF2F8" />
                  <circle r="12" fill="none" stroke="#EAF2F8" strokeWidth="1" opacity="0.3" />
                  <text x="18" y="4" fill="#EAF2F8" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fontSize="11">STUDENT ACTIVITY CTR (SAC)</text>
                </g>

                <g className="map-node" transform="translate(320, 110)">
                  <circle r="7" fill="#4DEBFF" />
                  <circle r="14" fill="none" stroke="#4DEBFF" strokeWidth="1" opacity="0.4" />
                  <text x="-165" y="4" fill="#4DEBFF" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="11">VMCC [EXHIBITIONS EXPO]</text>
                </g>
              </svg>
            </div>

            <div className="map-card-footer">
              <span className="hud-mono-xs">IIT BOMBAY POWAI CAMPUS · 550+ ACRE RESEARCH FACILITY</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
