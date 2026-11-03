import React from 'react';
import { EXPERIENCE_CATEGORIES } from '../data/eventData';

export const Experiences: React.FC = () => {
  return (
    <section id="experiences" className="section-padding experiences-section">
      <div className="container">
        
        <div className="section-header">
          <div className="hud-tag">// 02 · DISCOVERY DIRECTORY</div>
          <h2 className="section-title">
            EXPLORE THE <span className="text-gradient-cyan">SPECTRUM</span>.
          </h2>
          <p className="section-description">
            Six broad discovery categories designed to navigate the multi-faceted programming of Techfest ’26. Verified guidelines and team registration are hosted exclusively on the official portal.
          </p>
        </div>

        <div className="experience-grid">
          {EXPERIENCE_CATEGORIES.map(category => {
            const cardClass = category.featured 
              ? 'card-featured' 
              : category.id === 'competitions' 
              ? 'card-tall' 
              : 'card-standard';

            return (
              <article key={category.id} className={`exp-card ${cardClass} hud-bracket`}>
                <div className="exp-card-header">
                  <div className="exp-code-pill">[{category.code}]</div>
                  {category.badge && (
                    <span className={`exp-badge ${category.featured ? 'badge-lime' : category.id === 'competitions' ? 'badge-cyan' : ''}`}>
                      {category.badge}
                    </span>
                  )}
                </div>

                <div className="exp-card-body">
                  <div className="exp-icon-box">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4DEBFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>

                  <h3 className="exp-title">{category.title}</h3>
                  <p className="exp-text">{category.description}</p>

                  <div className="exp-tags">
                    {category.highlights.map(h => (
                      <span key={h} className="exp-tag">{h}</span>
                    ))}
                  </div>
                </div>

                <div className="exp-card-footer">
                  <a 
                    href={category.href} 
                    target={category.isExternal ? '_blank' : '_self'} 
                    rel={category.isExternal ? 'noopener noreferrer' : ''} 
                    className="exp-link"
                  >
                    <span>{category.linkText}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
