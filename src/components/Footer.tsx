import React from 'react';
import { EVENT_METADATA } from '../data/eventData';

export const Footer: React.FC = () => {
  return (
    <>
      <section className="final-cta-section">
        <div className="container text-center">
          <div className="final-cta-box hud-bracket titanium-panel">
            <div className="final-hud-tag">// THE NEXT EVOLUTION</div>
            <h2 className="final-cta-headline">
              STEP INTO WHAT<br />
              <span className="text-gradient-cyan">COMES NEXT</span>.
            </h2>
            <p className="final-cta-sub">
              Join thousands of researchers, engineers, and creators at IIT Bombay this 16–18 December 2026.
            </p>

            <div className="final-cta-buttons">
              <a href={EVENT_METADATA.officialUrl} target="_blank" rel="noopener noreferrer" className="btn-primary btn-large">
                <span>Access Official Techfest Portal</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>
              <a href="#hero" className="btn-secondary btn-large">
                <span>Back to Top ↑</span>
              </a>
            </div>

            <div className="final-telemetry-stamp">
              <span>COORDINATES: {EVENT_METADATA.coordinates}</span>
              <span>·</span>
              <span>CAMPUS OF IIT BOMBAY</span>
              <span>·</span>
              <span className="text-lime">REV: 26.4.1 [ACTIVE]</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-container">
          <div className="footer-top">
            
            <div className="footer-brand">
              <div className="brand-logo-mark">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#4DEBFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="#4DEBFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="#C8FF5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="brand-title">TECHFEST<span className="brand-accent">’26</span></div>
                <div className="brand-sub">IIT BOMBAY, MUMBAI</div>
              </div>
              <p className="footer-brand-p">
                Asia’s largest science and technology festival. Exploring the convergence of human reason and autonomous machinery.
              </p>
            </div>

            <div className="footer-links-col">
              <div className="footer-col-title">// FESTIVAL NAVIGATION</div>
              <ul className="footer-links-list">
                <li><a href="#about" className="footer-link">About Concept</a></li>
                <li><a href="#experiences" className="footer-link">Experience Directory</a></li>
                <li><a href="#interface" className="footer-link">Cyborg Interface</a></li>
                <li><a href="#plan" className="footer-link">Plan Your Visit</a></li>
                <li><a href="#faq" className="footer-link">Clarifications & FAQ</a></li>
              </ul>
            </div>

            <div className="footer-links-col">
              <div className="footer-col-title">// VERIFIED SOURCES</div>
              <ul className="footer-links-list">
                <li><a href="https://techfest.org" target="_blank" rel="noopener noreferrer" className="footer-link link-cyan">Official Techfest Portal ↗</a></li>
                <li><a href="https://www.iitb.ac.in" target="_blank" rel="noopener noreferrer" className="footer-link">IIT Bombay Official Site ↗</a></li>
                <li><a href="https://techfest.org" target="_blank" rel="noopener noreferrer" className="footer-link">Team Registration Portal ↗</a></li>
                <li><a href="https://techfest.org" target="_blank" rel="noopener noreferrer" className="footer-link">Competition Rulebooks ↗</a></li>
              </ul>
            </div>

            <div className="footer-links-col">
              <div className="footer-col-title">// TELEMETRY PROTOCOL</div>
              <div className="footer-hud-stats">
                <div className="stat-row">
                  <span className="stat-name">STATUS:</span>
                  <span className="stat-val text-lime">OPTIMAL</span>
                </div>
                <div className="stat-row">
                  <span className="stat-name">SECURITY:</span>
                  <span className="stat-val text-cyan">TLS 1.3 VERIFIED</span>
                </div>
                <div className="stat-row">
                  <span className="stat-name">EDITION:</span>
                  <span className="stat-val">29TH ITERATION</span>
                </div>
                <div className="stat-row">
                  <span className="stat-name">LOCATION:</span>
                  <span className="stat-val">POWAI, MUMBAI</span>
                </div>
              </div>
            </div>

          </div>

          <div className="tech-divider"></div>

          <div className="footer-bottom">
            <div className="attribution-text">
              <p>
                <strong>DISCREET CONCEPT ATTRIBUTION:</strong> This portal is an independent creative design study and campaign concept (“CYBORG — Beyond Human. Beyond Machine.”) designed for Techfest ’26, IIT Bombay. It is not an official IIT Bombay publication. All trademarks, official logos, and intellectual property belong to Techfest, IIT Bombay.
              </p>
            </div>
            <div className="footer-copy-text">
              © 2026 Techfest Concept Study · Built with precision engineering
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
