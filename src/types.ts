export interface NavItem {
  id: string;
  label: string;
}

export type EnergyScenario = 'day' | 'evening' | 'night' | 'grid_buffer';

export interface AreaLayer {
  id: string;
  name: string;
  color: string;
  accent: string;
  description: string;
  spatialRole: string;
  elements: string[];
}

export interface PhaseItem {
  number: string;
  period: string;
  title: string;
  focus: string;
  items: string[];
  statusLabel: string;
}

export interface ResearchQuestion {
  id: string;
  number: string;
  title: string;
  question: string;
  focus: string[];
  importance: string;
}

export interface StakeholderGroup {
  id: string;
  name: string;
  role: string;
  perspective: string;
  iconName: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'algemeen' | 'techniek' | 'omgeving' | 'planning';
}

export interface StatusStep {
  step: number;
  title: string;
  statusText: string;
  state: 'completed' | 'in_progress' | 'planned' | 'pending';
  explanation: string;
}
