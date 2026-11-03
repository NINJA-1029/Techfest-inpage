import React from 'react';
import { EVENT_METADATA } from '../data/eventData';

export const EventStrip: React.FC = () => {
  return (
    <div className="event-strip-wrapper">
      <div className="container">
        <div className="event-strip-grid hud-bracket">
          
          <div className="strip-item">
            <span className="strip-mono-label">// DATES CONFIRMED</span>
            <span className="strip-value">{EVENT_METADATA.datesConfirmed.toUpperCase()}</span>
            <span className="strip-sub">Annual 3-Day Technical Convergence</span>
          </div>

          <div className="strip-separator"></div>

          <div className="strip-item">
            <span className="strip-mono-label">// VENUE COORDINATES</span>
            <span className="strip-value">{EVENT_METADATA.locationConfirmed.toUpperCase()}</span>
            <span className="strip-sub">Main Campus, Powai · {EVENT_METADATA.coordinates}</span>
          </div>

          <div className="strip-separator"></div>

          <div className="strip-item">
            <span className="strip-mono-label">// CREATIVE THEME</span>
            <span className="strip-value text-cyan">CYBORG CONVERGENCE</span>
            <span className="strip-sub">Human Reason × Machine Accuracy</span>
          </div>

          <div className="strip-separator"></div>

          <div className="strip-item">
            <span className="strip-mono-label">// ACCESS PROTOCOL</span>
            <span className="strip-value text-lime">OPEN OFFICIAL PORTAL</span>
            <span className="strip-sub">Student & General Pathways via techfest.org</span>
          </div>

        </div>
      </div>
    </div>
  );
};
