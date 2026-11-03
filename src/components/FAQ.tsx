import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/eventData';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="section-padding faq-section">
      <div className="container container-narrow">
        
        <div className="section-header text-center">
          <div className="hud-tag">// 05 · CLARIFICATIONS</div>
          <h2 className="section-title">
            FREQUENTLY ASKED <span className="text-gradient-cyan">QUESTIONS</span>.
          </h2>
          <p className="section-description mx-auto">
            Verified event essentials and official pathway details. For unconfirmed schedules or specific rules, refer to official IIT Bombay portals.
          </p>
        </div>

        <div className="faq-accordion-list">
          {FAQ_ITEMS.map(item => {
            const isExpanded = openId === item.id;
            return (
              <div key={item.id} className="faq-item">
                <button
                  className="faq-trigger"
                  aria-expanded={isExpanded}
                  aria-controls={`faq-ans-${item.id}`}
                  onClick={() => toggle(item.id)}
                >
                  <span>{item.question}</span>
                  <svg className="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                <div id={`faq-ans-${item.id}`} className="faq-content" hidden={!isExpanded}>
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
