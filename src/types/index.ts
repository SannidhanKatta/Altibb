export interface NavItem {
  label: string;
  href: string;
  image?: string;
  description?: string;
  subItems?: NavItem[];
}

export interface Statistic {
  label: string;
  value: string;
  change?: string;
  isPositive?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface UseCase {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface NewsItem {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  link: string;
}

export interface Developer {
  title: string;
  description: string;
  link: string;
  icon: string;
}