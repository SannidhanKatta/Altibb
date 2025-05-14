import { NavItem } from '../types';

export const mainNavItems: NavItem[] = [
  {
    label: 'Network',
    href: '/network',
    image: '/Network.png',
    description: 'An enterprise-grade Layer 1 blockchain built for everyone',
    subItems: [
      { label: 'Network Overview', href: '/network' },
      { label: 'Tech Specs', href: '/tech-specs' },
      { label: 'History', href: '/history' },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    image: '/Solutions.png',
    description: 'Discover how XDC Network can transform your business',
    subItems: [
      { label: 'Solutions Overview', href: '/solutions' },
      { label: 'RWA Tokenization', href: '/rwa-tokenization' },
      { label: 'Trade Finance', href: '/trade-finance' },
      { label: 'Enterprise', href: '/enterprise' },
    ],
  },
  {
    label: 'Build on XDC',
    href: '/build-on-xdc',
    image: '/BuildOnXDC.png',
    description: 'Start building with powerful tools and resources',
    subItems: [
      { label: 'Documentation', href: '/developers/docs' },
      { label: 'Resources', href: '/developers/resources' },
      { label: 'Tools', href: '/developers/tools' },
      { label: 'GitHub', href: 'https://github.com/XDC-Community' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    image: '/Resources.png',
    description: 'Everything you need to learn about XDC Network',
    subItems: [
      { label: 'Resources Overview', href: '/resources' },
      { label: 'Tutorials', href: '/tutorials' },
      { label: 'Whitepapers', href: '/whitepapers' },
      { label: 'Media Kit', href: '/resources/media-kit' },
    ],
  },
  {
    label: 'Community',
    href: '/community',
    image: '/Community.png',
    description: 'Join the growing XDC Network community',
    subItems: [
      { label: 'Community Overview', href: '/community' },
      { label: 'Ecosystem', href: '/ecosystem' },
      { label: 'News & Insights', href: '/news' },
      { label: 'Developer Forum', href: '/forum' },
    ],
  },
];

export const footerLinks = {
  about: [
    { label: 'About XDC Network', href: '/about' },
    { label: 'Technology', href: '/about/technology' },
    { label: 'Tokenomics', href: '/about/tokenomics' },
    { label: 'Team', href: '/about/team' },
  ],
  developers: [
    { label: 'Documentation', href: '/developers/docs' },
    { label: 'GitHub', href: 'https://github.com/XDC-Community' },
    { label: 'Developer Portal', href: '/developers' },
    { label: 'Tools & SDKs', href: '/developers/tools' },
  ],
  community: [
    { label: 'Twitter', href: 'https://twitter.com/XDCFoundation' },
    { label: 'Telegram', href: 'https://t.me/xinfin' },
    { label: 'Discord', href: 'https://discord.gg/xdc-community' },
    { label: 'Forum', href: 'https://community.xdc.org' },
  ],
  resources: [
    { label: 'Whitepaper', href: '/resources/whitepaper' },
    { label: 'FAQs', href: '/resources/faqs' },
    { label: 'Network Status', href: '/network-status' },
    { label: 'Media Kit', href: '/resources/media-kit' },
  ],
};