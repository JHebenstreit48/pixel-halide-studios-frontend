export type NavLinkItem = {
  title: string;
  path: string;
};

const navigationLinks: NavLinkItem[] = [
  { title: 'Landscape', path: '/landscape' },
  { title: 'Portraits', path: '/portraits' },
  { title: 'Products', path: '/products' },
  { title: 'Architecture', path: '/architecture' },
  { title: 'Film', path: '/film' },
  { title: 'About', path: '/about' },
];

export default navigationLinks;