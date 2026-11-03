/**
 * TECHFEST '26 — CYBORG CONCEPT PORTAL
 * Interactive application engine:
 * - Active navigation spy
 * - Mobile drawer management with Esc-to-close & focus trap
 * - Real-time countdown telemetry clock to Dec 16, 2026
 * - Interactive Cyborg Subsystem inspector ("Explore the Interface")
 * - Neural schematic telemetry probe hot-spots
 * - Accessible FAQ accordion
 * - Desktop pointer parallax for hero artwork
 */

(function () {
  'use strict';

  // State Management
  const state = {
    activeSubsystem: 'neural',
    mobileMenuOpen: false,
    activeFaq: null,
    activeProbe: 'synapse',
  };

  const SUBSYSTEMS_DATA = {
    neural: {
      code: 'SYS-NC-01',
      title: 'Neural Core',
      subtitle: 'Synaptic Neuromorphic Processor',
      description:
        'The synthetic brain-computer nexus bridging organic cerebral neurotransmission with high-throughput silicon architecture. Processes thousands of high-bandwidth sensory inputs in real-time with sub-millisecond bio-latency.',
      designInspiration:
        'Inspired by the human neocortex operating in tandem with neuromorphic silicon architectures, embodying the seamless balance of human intuition and deterministic machine reasoning.',
      specs: [
        { label: 'Coupling Architecture', value: 'Bio-Synaptic Array' },
        { label: 'Signal Latency', value: '< 0.42 ms' },
        { label: 'Power Efficiency', value: 'Sub-5W Neuromorphic' },
        { label: 'Synaptic Integration', value: '98.4% Nominal' },
      ],
      telemetry: [
        { metric: 'BIO_COUPLING', value: '98.4%', status: 'optimal' },
        { metric: 'NEURAL_DRIFT', value: '0.012%', status: 'optimal' },
        { metric: 'SIGNAL_THROUGHPUT', value: '14.2 Tbps', status: 'active' },
        { metric: 'CORE_TEMP', value: '36.8°C', status: 'nominal' },
      ],
      region: { top: '8%', left: '34%', width: '38%', height: '28%' },
    },
    optical: {
      code: 'SYS-OS-02',
      title: 'Optical System',
      subtitle: 'Multi-Spectral Sensor Array',
      description:
        'Precision ocular subsystem utilizing high-resolution LiDAR, thermal telemetry, and multi-band optical sensors housed in an electric cyan aperture. Provides instantaneous spatial depth analysis and environmental scanning.',
      designInspiration:
        'Derived from biological visual foveation upgraded with multi-spectral machine perception, representing humanity’s curiosity magnified by optical instrumentation.',
      specs: [
        { label: 'Optical Wavelength', value: '480nm - 1200nm' },
        { label: 'Refresh Freq', value: '960 Hz Ultra-Fast' },
        { label: 'Aperture Matrix', value: 'Electro-Adaptive Cyan' },
        { label: 'Spatial Mapping', value: 'Sub-Millimeter 3D' },
      ],
      telemetry: [
        { metric: 'OPTIC_FLUX', value: '485 nm (Cyan)', status: 'active' },
        { metric: 'SPATIAL_SYNC', value: '100%', status: 'optimal' },
        { metric: 'LIDAR_RESOLUTION', value: '0.05 mm', status: 'optimal' },
        { metric: 'FRAME_LOCK', value: '960 FPS', status: 'active' },
      ],
      region: { top: '22%', left: '46%', width: '24%', height: '20%' },
    },
    mechanical: {
      code: 'SYS-MF-03',
      title: 'Mechanical Frame',
      subtitle: 'Brushed Titanium & Micromotor Chassis',
      description:
        'High-tensile Grade 5 titanium chassis featuring carbon-reinforced composite struts and micro-servo articulation. Protects vital biological components while facilitating millimeter-precise kinetic force transfer.',
      designInspiration:
        'Rooted in human musculoskeletal anatomy, re-engineered through aerospace titanium precision and robotic joint dynamics for resilience and exact balance.',
      specs: [
        { label: 'Alloy Compound', value: 'Titanium 6Al-4V' },
        { label: 'Tensile Threshold', value: '1,170 MPa' },
        { label: 'Kinetic Actuators', value: 'Micro-Harmonic Servos' },
        { label: 'Chassis Mass Ratio', value: '42% Lightweight' },
      ],
      telemetry: [
        { metric: 'CHASSIS_STRESS', value: '12.4% Max', status: 'nominal' },
        { metric: 'MOTOR_TORQUE', value: '84.2 Nm', status: 'active' },
        { metric: 'STRUCTURAL_INTEGRITY', value: '99.9%', status: 'optimal' },
        { metric: 'SURFACE_FINISH', value: 'Brushed Specular', status: 'nominal' },
      ],
      region: { top: '52%', left: '16%', width: '68%', height: '44%' },
    },
  };

  const PROBE_DATA = {
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

  // Init DOM event listeners on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initCountdown();
    initHeroParallax();
    initSubsystems();
    initProbes();
    initFaqAccordion();
    initScrollSpy();
  });

  // 1. Navigation & Mobile Drawer
  function initNavigation() {
    const nav = document.getElementById('main-nav');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const closeBtn = document.getElementById('mobile-drawer-close');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    // Sticky nav backdrop blur on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        nav.classList.add('nav-scrolled');
      } else {
        nav.classList.remove('nav-scrolled');
      }
    });

    function openMobileMenu() {
      state.mobileMenuOpen = true;
      mobileDrawer.classList.add('is-open');
      mobileBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }

    function closeMobileMenu() {
      state.mobileMenuOpen = false;
      mobileDrawer.classList.remove('is-open');
      mobileBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      mobileBtn.focus();
    }

    if (mobileBtn && mobileDrawer) {
      mobileBtn.addEventListener('click', () => {
        if (state.mobileMenuOpen) {
          closeMobileMenu();
        } else {
          openMobileMenu();
        }
      });

      if (closeBtn) {
        closeBtn.addEventListener('click', closeMobileMenu);
      }

      mobileLinks.forEach((link) => {
        link.addEventListener('click', closeMobileMenu);
      });

      // Escape key to close mobile menu
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && state.mobileMenuOpen) {
          closeMobileMenu();
        }
      });
    }
  }

  // 2. Real-Time Countdown to Dec 16, 2026
  function initCountdown() {
    const targetDate = new Date('2026-12-16T09:00:00+05:30').getTime();

    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minsEl = document.getElementById('cd-mins');
    const secsEl = document.getElementById('cd-secs');

    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    function update() {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minsEl.textContent = '00';
        secsEl.textContent = '00';
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      daysEl.textContent = d < 10 ? '0' + d : d;
      hoursEl.textContent = h < 10 ? '0' + h : h;
      minsEl.textContent = m < 10 ? '0' + m : m;
      secsEl.textContent = s < 10 ? '0' + s : s;
    }

    update();
    setInterval(update, 1000);
  }

  // 3. Desktop Pointer Parallax for Hero Artwork
  function initHeroParallax() {
    const heroCard = document.getElementById('hero-artwork-frame');
    if (!heroCard) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    heroCard.addEventListener('mousemove', (e) => {
      const rect = heroCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;

      const rotateY = deltaX * 4; // subtle max 4deg
      const rotateX = -deltaY * 4;

      heroCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    });

    heroCard.addEventListener('mouseleave', () => {
      heroCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  }

  // 4. Interactive Cyborg Subsystem Inspector
  function initSubsystems() {
    const tabs = document.querySelectorAll('.subsystem-tab');
    const reticle = document.getElementById('module-reticle');
    const titleEl = document.getElementById('subsystem-title');
    const codeEl = document.getElementById('subsystem-code');
    const subtitleEl = document.getElementById('subsystem-subtitle');
    const descEl = document.getElementById('subsystem-desc');
    const inspEl = document.getElementById('subsystem-inspiration');
    const specsContainer = document.getElementById('subsystem-specs');
    const telemetryContainer = document.getElementById('subsystem-telemetry');

    if (!tabs.length || !reticle) return;

    function renderSubsystem(id) {
      const data = SUBSYSTEMS_DATA[id];
      if (!data) return;

      state.activeSubsystem = id;

      // Update Tab Styles & ARIA
      tabs.forEach((tab) => {
        const isCurrent = tab.getAttribute('data-subsystem') === id;
        tab.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
        if (isCurrent) {
          tab.classList.add('tab-active');
        } else {
          tab.classList.remove('tab-active');
        }
      });

      // Update Reticle Region Coordinates on image
      reticle.style.top = data.region.top;
      reticle.style.left = data.region.left;
      reticle.style.width = data.region.width;
      reticle.style.height = data.region.height;

      // Update Texts
      if (titleEl) titleEl.textContent = data.title;
      if (codeEl) codeEl.textContent = `// ${data.code}`;
      if (subtitleEl) subtitleEl.textContent = data.subtitle;
      if (descEl) descEl.textContent = data.description;
      if (inspEl) inspEl.textContent = data.designInspiration;

      // Update Specs
      if (specsContainer) {
        specsContainer.innerHTML = data.specs
          .map(
            (spec) => `
          <div class="spec-row">
            <span class="spec-label">${spec.label}</span>
            <span class="spec-value">${spec.value}</span>
          </div>
        `
          )
          .join('');
      }

      // Update Telemetry
      if (telemetryContainer) {
        telemetryContainer.innerHTML = data.telemetry
          .map(
            (t) => `
          <div class="telemetry-pill">
            <span class="telemetry-dot dot-${t.status}"></span>
            <span class="telemetry-metric">${t.metric}:</span>
            <span class="telemetry-val">${t.value}</span>
          </div>
        `
          )
          .join('');
      }
    }

    // Attach click and keyboard handlers
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const id = tab.getAttribute('data-subsystem');
        renderSubsystem(id);
      });

      tab.addEventListener('keydown', (e) => {
        let nextTab = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          nextTab = tab.nextElementSibling || tabs[0];
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          nextTab = tab.previousElementSibling || tabs[tabs.length - 1];
        }
        if (nextTab) {
          nextTab.focus();
          const id = nextTab.getAttribute('data-subsystem');
          renderSubsystem(id);
        }
      });
    });

    // Initial render
    renderSubsystem('neural');
  }

  // 5. Interactive Neural Schematic Probes
  function initProbes() {
    const probeButtons = document.querySelectorAll('.schematic-probe');
    const probeTitle = document.getElementById('probe-title');
    const probeDesc = document.getElementById('probe-desc');
    const probeRate = document.getElementById('probe-rate');
    const probeBw = document.getElementById('probe-bw');

    if (!probeButtons.length) return;

    function renderProbe(id) {
      const data = PROBE_DATA[id];
      if (!data) return;

      state.activeProbe = id;

      probeButtons.forEach((btn) => {
        const isCurrent = btn.getAttribute('data-probe') === id;
        btn.setAttribute('aria-pressed', isCurrent ? 'true' : 'false');
        if (isCurrent) {
          btn.classList.add('probe-active');
        } else {
          btn.classList.remove('probe-active');
        }
      });

      if (probeTitle) probeTitle.textContent = data.title;
      if (probeDesc) probeDesc.textContent = data.desc;
      if (probeRate) probeRate.textContent = data.rate;
      if (probeBw) probeBw.textContent = data.bandwidth;
    }

    probeButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-probe');
        renderProbe(id);
      });
    });

    renderProbe('synapse');
  }

  // 6. Accessible FAQ Accordion
  function initFaqAccordion() {
    const triggers = document.querySelectorAll('.faq-trigger');

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        const contentId = trigger.getAttribute('aria-controls');
        const contentEl = document.getElementById(contentId);

        // Close all other triggers for clean single-expanded view
        triggers.forEach((otherTrigger) => {
          if (otherTrigger !== trigger) {
            otherTrigger.setAttribute('aria-expanded', 'false');
            const otherContent = document.getElementById(otherTrigger.getAttribute('aria-controls'));
            if (otherContent) otherContent.hidden = true;
          }
        });

        // Toggle current
        trigger.setAttribute('aria-expanded', !isExpanded);
        if (contentEl) {
          contentEl.hidden = isExpanded;
        }
      });

      // Keyboard support: Enter / Space triggers click natively
    });
  }

  // 7. ScrollSpy for Navigation Indicator
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.desktop-nav-link');

    if (!sections.length || !navLinks.length) return;

    window.addEventListener('scroll', () => {
      let currentSectionId = '';
      const scrollPos = window.scrollY + 120;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSectionId = section.getAttribute('id');
        }
      });

      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href === `#${currentSectionId}`) {
          link.classList.add('nav-link-active');
        } else {
          link.classList.remove('nav-link-active');
        }
      });
    });
  }
})();
