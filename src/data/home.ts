import { Statistic, Feature, UseCase, NewsItem, Developer } from '../types';

export const statistics: Statistic[] = [
  {
    label: 'Market Cap',
    value: '$443.5M',
    change: '2.3%',
    isPositive: true,
  },
  {
    label: 'XDC Price',
    value: '$0.0320',
    change: '1.8%',
    isPositive: true,
  },
  {
    label: 'Transactions',
    value: '35.2M+',
    change: '4.5%',
    isPositive: true,
  },
  {
    label: 'Network TPS',
    value: '2,000+',
  },
  {
    label: 'Validators',
    value: '108',
  },
];

export const features: Feature[] = [
  {
    title: 'Enterprise-Ready',
    description: 'Built for enterprise use cases with a focus on security, scalability, and compliance.',
    icon: 'building',
  },
  {
    title: 'Energy Efficient',
    description: 'XDPoS consensus uses 99% less energy than traditional PoW blockchains.',
    icon: 'leaf',
  },
  {
    title: 'Interoperable',
    description: 'Seamlessly connect with other blockchain networks and traditional systems.',
    icon: 'plug',
  },
  {
    title: 'Fast & Low Cost',
    description: 'Transactions confirm in 2 seconds with near-zero gas fees.',
    icon: 'zap',
  },
];

export const useCases: UseCase[] = [
  {
    title: 'Trade Finance',
    description: 'Streamlining global trade with instant settlements and reduced paperwork.',
    icon: 'briefcase',
    link: '/use-cases/trade-finance',
  },
  {
    title: 'Supply Chain',
    description: 'End-to-end tracking and transparency for global supply chains.',
    icon: 'truck',
    link: '/use-cases/supply-chain',
  },
  {
    title: 'Digital Assets',
    description: 'Issue, manage, and trade tokenized assets with built-in compliance.',
    icon: 'database',
    link: '/use-cases/digital-assets',
  },
];

export const newsItems: NewsItem[] = [
  {
    title: 'XDC Network Partners with Major Financial Institution',
    date: 'June 15, 2023',
    excerpt: 'XDC Network announces a strategic partnership with a leading financial institution to implement blockchain solutions for trade finance.',
    image: 'https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/news/xdc-partners-financial-institution',
  },
  {
    title: 'XDC Foundation Launches $100M Ecosystem Fund',
    date: 'May 28, 2023',
    excerpt: 'The XDC Foundation announces a $100M ecosystem fund to support developers building on the XDC Network.',
    image: 'https://images.pexels.com/photos/7571986/pexels-photo-7571986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/news/xdc-foundation-ecosystem-fund',
  },
  {
    title: 'XDC Network Achieves 2,000 TPS in Latest Upgrade',
    date: 'April 12, 2023',
    excerpt: 'The latest network upgrade enables XDC Network to process over 2,000 transactions per second, enhancing scalability.',
    image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/news/xdc-network-upgrade-2000-tps',
  },
];

export const developers: Developer[] = [
  {
    title: 'Documentation',
    description: 'Comprehensive guides to help you start building on XDC Network.',
    link: '/developers/docs',
    icon: 'book-open',
  },
  {
    title: 'XDC SDK',
    description: 'Official software development kit for integrating with XDC Network.',
    link: '/developers/xdc-sdk',
    icon: 'code',
  },
  {
    title: 'GitHub',
    description: 'Explore open-source repositories and contribute to the ecosystem.',
    link: 'https://github.com/XDC-Community',
    icon: 'github',
  },
  {
    title: 'Developer Forum',
    description: 'Connect with other developers and get help with your projects.',
    link: 'https://community.xdc.org',
    icon: 'message-circle',
  },
];