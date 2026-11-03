export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface EventFact {
  eventTitle: string;
  edition: string;
  tagline: string;
  datesConfirmed: string;
  locationConfirmed: string;
  coordinates: string;
  officialUrl: string;
  officialRegisterUrl: string;
  disclaimer: string;
}

export interface ExperienceCategory {
  id: string;
  code: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  linkText: string;
  href: string;
  isExternal: boolean;
  featured?: boolean;
  badge?: string;
}

export interface CyborgSubsystem {
  id: 'neural' | 'optical' | 'mechanical';
  code: string;
  title: string;
  subtitle: string;
  description: string;
  designInspiration: string;
  specs: {
    label: string;
    value: string;
  }[];
  telemetry: {
    metric: string;
    value: string;
    status: 'optimal' | 'nominal' | 'active';
  }[];
  regionCoordinates: {
    top: string;
    left: string;
    width: string;
    height: string;
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  verifiedSource?: string;
}
