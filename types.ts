import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Statistic {
  value: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
}