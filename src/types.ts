export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CaseStudyScenario {
  id: string;
  scenario: string;
  problem: string;
  solution: string;
  outcome: string;
  avatar: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface WaitlistSubmission {
  email: string;
  timestamp: string;
  type: 'partnership' | 'user';
  name?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  company?: string;
  message: string;
  timestamp: string;
}
