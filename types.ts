import type { ReactNode } from 'react';

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: number;
  imageUrl: string;
  title: string;
  category: string;
}
