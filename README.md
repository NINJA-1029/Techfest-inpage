# TECHFEST ’26, IIT BOMBAY — CYBORG CONCEPT LANDING PAGE

> **“CYBORG — Beyond Human. Beyond Machine.”**  
> *Independent Creative Design Study & Campaign Concept for Techfest ’26, IIT Bombay.*

---

## 1. Project Context & Verification

- **Event:** Techfest ’26, Indian Institute of Technology (IIT) Bombay
- **Confirmed Dates:** 16–18 December 2026
- **Confirmed Location:** IIT Bombay Campus, Powai, Mumbai, Maharashtra 400076, India
- **Coordinates:** `19.1334° N, 72.9133° E`
- **Official Portal & Verified Destination:** [techfest.org](https://techfest.org)
- **Concept Tagline:** Original creative campaign copy (*“CYBORG — Beyond Human. Beyond Machine.”*). Unverified items (such as speaker rosters and precise competition rulebooks) link directly to official sources and are maintained in editable placeholders.

---

## 2. Visual Direction & Design System

The visual language evokes entering a high-security futuristic research institute where human intelligence and machine precision converge:

- **Obsidian Black (`#070A0F`):** Main deep atmospheric canvas.
- **Graphite (`#141A23` / `#1B232F`):** Elevated tactile surfaces, card backings, and telemetry panels.
- **Electric Cyan (`#4DEBFF`):** Primary focal accents, optic sensor reticles, interactive highlights, and link states.
- **Acid Lime (`#C8FF5F`):** Restrained telemetry indicators, live event pulses, and active system badges.
- **Soft White (`#EAF2F8`):** High-contrast, WCAG 2.2 AA compliant primary typography.
- **Typography:**
  - Display: `Syne` & `Space Grotesk` (geometric, commanding display letterforms)
  - Interface & Telemetry: `JetBrains Mono` (precision coordinates, timecodes, data labels)
  - Body Copy: `Inter` (neutral, readable editorial text)
- **Technical HUD Elements:**
  - Corner brackets (`.hud-bracket`) with subtle corner borders
  - Active optic target scanner ring with cyan glow
  - Hairline coordinate dividers and crosshairs (`+`)
  - Real-time countdown clock to December 16, 2026
  - Zero layout shifts, no generic gradient blobs, no emoji icons, and no disruptive scroll hijacking.

---

## 3. Page Structure & Features

1. **Sticky Navigation:**
   - Techfest ’26 wordmark + IIT Bombay badge.
   - Live telemetry status indicator (`● SYSTEM OPTIMAL · 16–18 DEC 2026`).
   - Section anchor links (`About`, `Experiences`, `Interface`, `Plan Visit`, `FAQ`).
   - Prominent *“Official Site”* primary CTA.
   - Fully accessible mobile drawer with keyboard navigation (`Esc` to close, focus management, 48px touch targets).

2. **Hero — The Signature Moment:**
   - Asymmetric desktop composition: Event identity, oversized headline (*“THE NEXT EVOLUTION STARTS HERE.”*), confirmed dates/coordinates, dual CTAs (*“Explore Experiences”* and *“Visit Official Techfest ↗”*), and real-time countdown telemetry.
   - Right: Striking cyborg bust artwork encased in a brushed-titanium HUD frame with an animated optic scanner reticle, desktop pointer parallax, and non-intrusive technical annotations (`OPTIC_MATRIX // MK-VI [ONLINE]`, `CHASSIS // BRUSHED TITANIUM`, `NEURAL INTEGRATION // 98.4%`).

3. **Event Information Strip:**
   - High-density strip presenting confirmed dates, venue coordinates, creative premise, and open registration protocols with technical hairline separators.

4. **About — Human × Machine:**
   - Split progressive composition explaining the theme: Biological Intuition, Autonomous Precision, and Symbiotic Future.
   - Interactive Neural-to-Circuit convergence schematic with selectable probe hotspots (`Probe A`, `Probe B`, `Probe C`) providing live signal telemetry.

5. **Experience Directory:**
   - Editorial asymmetric grid showcasing 6 discovery categories:
     1. *Robotics & International Exhibitions* (Featured large 2-column showcase)
     2. *Technical Competitions* (Tall championship card)
     3. *Hands-on Masterclasses & Workshops*
     4. *Keynote Talks & Dialogues* (Noted: official lineup announced on techfest.org)
     5. *Sensory & Immersive Tech*
     6. *Innovation & Startup Alley*

6. **Interactive Cyborg Module — “Explore the Interface”:**
   - Lightweight interactive exhibit allowing visitors to deconstruct 3 subsystems:
     - **Neural Core (`SYS-NC-01`)**
     - **Optical System (`SYS-OS-02`)**
     - **Mechanical Frame (`SYS-MF-03`)**
   - Highlights the exact anatomical region on the cyborg diagram with an animated target reticle and renders design inspiration, hardware specs, and telemetry readouts.

7. **Plan Your Visit:**
   - Confirmed dates, venue coordinates, and official entry protocol disclaimer.
   - Custom SVG schematic map of the 550+ acre IIT Bombay Powai campus, highlighting Powai Lake, Main Gate, Gymkhana Grounds (Robotics Arenas), Convocation Hall (Keynotes), SAC, and VMCC.

8. **FAQ Accordion:**
   - Accessible accordion answering essential visitor questions regarding Techfest ’26, dates, official competition rulebooks, ticketing, and concept attribution.

9. **Final CTA & Technical Footer:**
   - High-impact terminal banner (*“STEP INTO WHAT COMES NEXT.”*).
   - Verified resource navigation links.
   - Discreet attribution statement clarifying that this is an independent concept study and directing visitors to official IIT Bombay Techfest portals.

---

## 4. Architecture & File Structure

```
d:/TFCAVIT/
├── index.html                   # High-performance semantic HTML5 markup & SEO tags
├── server.js                    # Local high-speed Node HTTP server
├── package.json                 # Project configuration and dependencies
├── public/
│   └── assets/
│       ├── cyborg_hero.jpg      # Photorealistic cyborg convergence bust portrait
│       └── neural_schematic.jpg # Neural-to-circuit blueprint graphic
├── src/
│   ├── types.ts                 # TypeScript interfaces for facts, telemetry & UI
│   ├── app.js                   # Interactive client-side engine (telemetry, tabs, accordion, countdown)
│   ├── data/
│   │   └── eventData.ts         # Centralized verified facts, copy & links
│   ├── styles/
│   │   ├── main.css             # Design tokens, typography, HUD brackets, animations
│   │   └── components.css       # Layout grids, hero, interactive module, responsive rules
│   ├── components/              # Modular React / TypeScript components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── EventStrip.tsx
│   │   ├── About.tsx
│   │   ├── Experiences.tsx
│   │   ├── CyborgModule.tsx
│   │   ├── PlanVisit.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   ├── App.tsx                  # Root application component
│   └── main.tsx                 # Application entry point
└── README.md
```

---

## 5. Local Setup & Quick Run

To run the application locally on `http://127.0.0.1:3000`:

```bash
# Start the local server
node server.js
# Or
npm start
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000) in any modern browser.

---

## 6. Verification & Quality Checklist

- [x] **Desktop (1440px):** Tested via automated browser subagent; asymmetrical grid, parallax, light sweep, and HUD layout verified.
- [x] **Tablet & Laptop (1024px & 768px):** Clean column collapse and adaptive typography.
- [x] **Mobile (375px / 360px):** Tested; hamburger drawer opens smoothly, headline stacks properly, no horizontal overflow.
- [x] **Interactive Controls:** Cyborg subsystem tabs (`Neural Core`, `Optical System`, `Mechanical Frame`) update reticle position and live telemetry.
- [x] **Schematic Probes:** Probe A, B, and C update telemetry metrics dynamically.
- [x] **FAQ Accordion:** Full keyboard and click disclosure with `aria-expanded` and single-open clean state.
- [x] **Accessibility:** WCAG 2.2 AA compliant contrast, 48px+ touch targets, visible focus rings, and `@media (prefers-reduced-motion: reduce)` overrides.
- [x] **Console Health:** Verified 0 console errors or network warnings.
