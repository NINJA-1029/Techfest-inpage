import { EventFact, NavItem, ExperienceCategory, CyborgSubsystem, FAQItem } from '../types';

export const EVENT_METADATA: EventFact = {
  eventTitle: "TECHFEST ’26",
  edition: "29TH EDITION",
  tagline: "CYBORG — Beyond Human. Beyond Machine.",
  datesConfirmed: "16–18 December 2026",
  locationConfirmed: "IIT Bombay, Powai, Mumbai",
  coordinates: "19.1334° N, 72.9133° E",
  officialUrl: "https://techfest.org",
  officialRegisterUrl: "https://techfest.org",
  disclaimer: "Creative concept study & independent campaign for Techfest ’26, IIT Bombay. Not an official IIT Bombay site.",
};

export const NAV_LINKS: NavItem[] = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experiences", href: "#experiences", id: "experiences" },
  { label: "Interface", href: "#interface", id: "interface" },
  { label: "Plan Visit", href: "#plan", id: "plan" },
  { label: "FAQ", href: "#faq", id: "faq" },
];

export const EXPERIENCE_CATEGORIES: ExperienceCategory[] = [
  {
    id: "robotics-exhibitions",
    code: "VCTR_01",
    title: "Robotics & Global Exhibitions",
    category: "Featured Showcase",
    description: "Witness cutting-edge international robotics, bionic mobility systems, autonomous rovers, and frontier engineering marvels from defense, aerospace, and academic research labs worldwide.",
    highlights: ["International Robo-Arenas", "Autonomous Mobile Units", "Bionic Prosthetics"],
    linkText: "Official Exhibition Info ↗",
    href: "https://techfest.org",
    isExternal: true,
    featured: true,
    badge: "Flagship Vector"
  },
  {
    id: "competitions",
    code: "VCTR_02",
    title: "Technical Competitions",
    category: "Championship Arenas",
    description: "High-stakes multi-tier challenges spanning combat robotics, AI algorithmic problem solving, aeromodelling, smart automation, and structural mechanics.",
    highlights: ["Robowars & Cozmo Clench", "Meshmerize Maze Solvers", "Aeromodelling Challenge"],
    linkText: "Competition Guidelines ↗",
    href: "https://techfest.org",
    isExternal: true,
    badge: "Official Entry"
  },
  {
    id: "workshops",
    code: "VCTR_03",
    title: "Hands-on Masterclasses",
    category: "Technical Upskilling",
    description: "Intensive practitioner workshops instructed by industry leaders covering neuromorphic hardware, embedded systems, quantum computing, and bio-cybernetics.",
    highlights: ["Applied AI Architecture", "Embedded Edge Computing", "Robotics Kinematics"],
    linkText: "Registration Pathways ↗",
    href: "https://techfest.org",
    isExternal: true,
  },
  {
    id: "talks",
    code: "VCTR_04",
    title: "Keynote Lectures & Dialogues",
    category: "Visionary Discourse",
    description: "Inspirational addresses and candid dialogues featuring Nobel laureates, pioneering scientists, deep-tech founders, and global innovators. Official speaker lineup announced via the official portal.",
    highlights: ["Global Keynote Series", "Fireside Tech Dialogues", "Research Panels"],
    linkText: "Speaker Schedule ↗",
    href: "https://techfest.org",
    isExternal: true,
    badge: "Lineup TBA via Official Site"
  },
  {
    id: "tech-experiences",
    code: "VCTR_05",
    title: "Sensory & Immersive Tech",
    category: "Experiential Zones",
    description: "Step into sensory augmented realities, haptic flight simulators, neuro-reactive audio-visual zones, and interactive bio-mechanical installations across campus.",
    highlights: ["Spatial XR Demonstrations", "Haptic Simulators", "Cybernetic Soundscapes"],
    linkText: "Campus Installation Map ↗",
    href: "#plan",
    isExternal: false,
  },
  {
    id: "innovation-showcase",
    code: "VCTR_06",
    title: "Innovation & Startup Alley",
    category: "R&D Prototypes",
    description: "A convergence platform for student patent holders, university research consortiums, and deep-tech startups presenting disruptive technologies ready for scale.",
    highlights: ["Student Research Expo", "Seed-Stage Prototypes", "Investor Showcases"],
    linkText: "Submit Research / Pitch ↗",
    href: "https://techfest.org",
    isExternal: true,
  }
];

export const CYBORG_SUBSYSTEMS: CyborgSubsystem[] = [
  {
    id: "neural",
    code: "SYS-NC-01",
    title: "Neural Core",
    subtitle: "Synaptic Neuromorphic Processor",
    description: "The synthetic brain-computer nexus bridging organic cerebral neurotransmission with high-throughput silicon architecture. Processes thousands of high-bandwidth sensory inputs in real-time with sub-millisecond bio-latency.",
    designInspiration: "Inspired by the human neocortex operating in tandem with neuromorphic silicon architectures, embodying the seamless balance of human intuition and deterministic machine reasoning.",
    specs: [
      { label: "Coupling Architecture", value: "Bio-Synaptic Array" },
      { label: "Signal Latency", value: "< 0.42 ms" },
      { label: "Power Efficiency", value: "Sub-5W Neuromorphic" },
      { label: "Synaptic Integration", value: "98.4% Nominal" }
    ],
    telemetry: [
      { metric: "BIO_COUPLING", value: "98.4%", status: "optimal" },
      { metric: "NEURAL_DRIFT", value: "0.012%", status: "optimal" },
      { metric: "SIGNAL_THROUGHPUT", value: "14.2 Tbps", status: "active" },
      { metric: "CORE_TEMP", value: "36.8°C", status: "nominal" }
    ],
    regionCoordinates: {
      top: "12%",
      left: "38%",
      width: "36%",
      height: "26%"
    }
  },
  {
    id: "optical",
    code: "SYS-OS-02",
    title: "Optical System",
    subtitle: "Multi-Spectral Sensor Array",
    description: "Precision ocular subsystem utilizing high-resolution LiDAR, thermal telemetry, and multi-band optical sensors housed in an electric cyan aperture. Provides instantaneous spatial depth analysis and environmental scanning.",
    designInspiration: "Derived from biological visual foveation upgraded with multi-spectral machine perception, representing humanity’s curiosity magnified by optical instrumentation.",
    specs: [
      { label: "Optical Wavelength", value: "480nm - 1200nm" },
      { label: "Refresh Freq", value: "960 Hz Ultra-Fast" },
      { label: "Aperture Matrix", value: "Electro-Adaptive Cyan" },
      { label: "Spatial Mapping", value: "Sub-Millimeter 3D" }
    ],
    telemetry: [
      { metric: "OPTIC_FLUX", value: "485 nm (Cyan)", status: "active" },
      { metric: "SPATIAL_SYNC", value: "100%", status: "optimal" },
      { metric: "LIDAR_RESOLUTION", value: "0.05 mm", status: "optimal" },
      { metric: "FRAME_LOCK", value: "960 FPS", status: "active" }
    ],
    regionCoordinates: {
      top: "23%",
      left: "48%",
      width: "22%",
      height: "18%"
    }
  },
  {
    id: "mechanical",
    code: "SYS-MF-03",
    title: "Mechanical Frame",
    subtitle: "Brushed Titanium & Micromotor Chassis",
    description: "High-tensile Grade 5 titanium chassis featuring carbon-reinforced composite struts and micro-servo articulation. Protects vital biological components while facilitating millimeter-precise kinetic force transfer.",
    designInspiration: "Rooted in human musculoskeletal anatomy, re-engineered through aerospace titanium precision and robotic joint dynamics for resilience and exact balance.",
    specs: [
      { label: "Alloy Compound", value: "Titanium 6Al-4V" },
      { label: "Tensile Threshold", value: "1,170 MPa" },
      { label: "Kinetic Actuators", value: "Micro-Harmonic Servos" },
      { label: "Chassis Mass Ratio", value: "42% Lightweight" }
    ],
    telemetry: [
      { metric: "CHASSIS_STRESS", value: "12.4% Max", status: "nominal" },
      { metric: "MOTOR_TORQUE", value: "84.2 Nm", status: "active" },
      { metric: "STRUCTURAL_INTEGRITY", value: "99.9%", status: "optimal" },
      { metric: "SURFACE_FINISH", value: "Brushed Specular", status: "nominal" }
    ],
    regionCoordinates: {
      top: "54%",
      left: "22%",
      width: "56%",
      height: "42%"
    }
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is Techfest ’26?",
    answer: "Techfest is the annual science and technology festival of the Indian Institute of Technology (IIT) Bombay. Recognized as Asia's largest technical festival, it gathers over 175,000 students, researchers, innovators, and technology enthusiasts from across the globe to compete, showcase cutting-edge discoveries, and engage in high-impact workshops and keynote lectures."
  },
  {
    id: "faq-2",
    question: "Where and when does Techfest ’26 take place?",
    answer: "Techfest ’26 is officially scheduled for 16–18 December 2026. The entire event takes place on the scenic campus of the Indian Institute of Technology Bombay in Powai, Mumbai, Maharashtra, India (19.1334° N, 72.9133° E)."
  },
  {
    id: "faq-3",
    question: "Where can I explore official competitions and register?",
    answer: "All official competition problem statements, rules, team registration eligibility, prize guidelines, and deadlines are published exclusively through the official Techfest portal (techfest.org). Visitors should bookmark the official site and beware of unverified third-party registration portals."
  },
  {
    id: "faq-4",
    question: "How do I find registration details, ticketing, and workshop entry?",
    answer: "Historically, entry to Techfest exhibitions and general campus venues is complimentary for registered students holding valid institutional identification. Specific intensive masterclasses and competitions require prior registration slots via techfest.org. Official ticketing, schedule, and participation guidelines will be announced on the official portal."
  },
  {
    id: "faq-5",
    question: "Is this website the official Techfest site?",
    answer: "No. This website is an independent creative design campaign and concept portal exploring the 'CYBORG — Beyond Human. Beyond Machine.' theme for Techfest ’26, IIT Bombay. Its purpose is to present an evocative visual experience and guide attendees directly to verified official IIT Bombay Techfest registration channels."
  }
];
