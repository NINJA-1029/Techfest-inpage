import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data/eventData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className={`nav-header ${scrolled ? 'nav-scrolled' : ''}`} id="main-nav">
        <div className="container nav-container">
          
          <a href="#hero" className="nav-brand" aria-label="Techfest 2026 Home">
            <div className="brand-logo-mark">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#4DEBFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="#4DEBFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="#C8FF5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="brand-text">
              <span className="brand-title">TECHFEST<span className="brand-accent">’26</span></span>
              <span className="brand-sub">IIT BOMBAY · MUMBAI</span>
            </div>
          </a>

          <div className="nav-status-pill d-none-mobile">
            <span className="status-dot"></span>
            <span className="status-text">DEC 16–18, 2026 · SYSTEM OPTIMAL</span>
          </div>

          <nav className="nav-desktop-menu d-none-mobile" aria-label="Main Navigation">
            {NAV_LINKS.map(link => (
              <a key={link.id} href={link.href} className="desktop-nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a href="https://techfest.org" target="_blank" rel="noopener noreferrer" className="btn-primary nav-cta d-none-mobile">
              <span>Official Site</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>

            <button 
              id="mobile-menu-btn" 
              className="mobile-toggle-btn" 
              aria-label="Open Navigation Menu" 
              aria-expanded={mobileMenuOpen} 
              aria-controls="mobile-drawer"
              onClick={toggleMobileMenu}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>

        </div>
      </header>

      <div id="mobile-drawer" className={`mobile-drawer ${mobileMenuOpen ? 'is-open' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile Navigation">
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <div className="brand-text">
              <span className="brand-title">TECHFEST<span className="brand-accent">’26</span></span>
              <span className="brand-sub">IIT BOMBAY</span>
            </div>
            <button id="mobile-drawer-close" className="mobile-drawer-close" aria-label="Close Navigation Menu" onClick={closeMobileMenu}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          <div className="mobile-drawer-body">
            <nav className="mobile-nav-links" aria-label="Mobile Navigation Links">
              {NAV_LINKS.map((link, idx) => (
                <a key={link.id} href={link.href} className="mobile-nav-link" onClick={closeMobileMenu}>
                  <span className="mobile-num">0{idx + 1}</span>
                  <span className="mobile-label">{link.label}</span>
                </a>
              ))}
            </nav>

            <div className="mobile-drawer-footer">
              <div className="mobile-telemetry">
                <span className="hud-mono-xs">COORDINATES: 19.1334° N, 72.9133° E</span>
                <span className="hud-mono-xs">DATES: 16–18 DECEMBER 2026</span>
              </div>
              <a href="https://techfest.org" target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                <span>Visit Official Techfest</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
